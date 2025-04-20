// src/components/Terminal.tsx
import { useState, useRef, useEffect } from 'react'

interface TerminalEntry {
    command: string
    output: string
}

function runCode(code: string): string {
    let output = '';

    // monkey-patch console
    const originalConsoleLog = console.log;
    console.log = (...args: any[]) => {
        output += args.map(String).join(' ') + '\n';
    };

    try {
        const result = eval(code);
        if (result !== undefined) {
            output += String(result) + '\n';
        }
    } catch (err) {
        output += 'Error: ' + err + '\n';
    }

    console.log = originalConsoleLog; // Restore original
    return output.trim();
}

export const Terminal = () => {
    const [entries, setEntries] = useState<TerminalEntry[]>([
        { command: 'console.log("Hello, World!")', output: 'Hello, World!' },
        // { command: '["AWS", "Python", "React", "Node.js"].join(" | ")', output: 'AWS | Python | React | Node.js' },
        // { command: 'const experience = 6; `${experience}+ years of experience`', output: '6+ years of experience' },
        { command: 'new Date().getFullYear()', output: String(new Date().getFullYear()) },
        { command: '(skills => skills.filter(s => s.startsWith("A")))(["AWS", "Python", "React"])', output: 'AWS' },
        // { command: 'fetch && "API calls supported" || "No fetch available"', output: 'API calls supported' }
    ])
    const [currentCommand, setCurrentCommand] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const terminalContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (terminalContentRef.current) {
            terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight
        }
    }, [entries])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            executeCommand()
        }
    }

    const executeCommand = () => {
        if (!currentCommand.trim()) return

        let result: string
        try {
            // Using direct eval as requested
            const output = runCode(currentCommand)
            result = String(output !== undefined ? output : 'undefined')
        } catch (error: any) {
            result = `Error: ${error.message}`
        }

        setEntries([...entries, { command: currentCommand, output: result }])
        setCurrentCommand('')
    }

    const handleInputFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div
            className="bg-[var(--background-color)] border border-[var(--border-color)] rounded-md h-80 overflow-hidden text-sm font-mono relative flex flex-col"
            onClick={handleInputFocus}
        >
            <div className="p-1 bg-[#1a1a1a] border-b border-[var(--border-color)] text-xs flex items-center sticky top-0 z-10">
                <div className="flex space-x-1.5 mr-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="mx-auto text-[var(--muted-text-color)]">JavaScript Terminal</span>
            </div>
            <div className="p-3 flex-grow overflow-auto" ref={terminalContentRef}>
                {entries.map((entry, index) => (
                    <div key={index} className="mb-2">
                        <div className="flex">
                            <span className="text-[var(--terminal-green)] mr-2">$</span>
                            <span className="text-[var(--text-color)]">{entry.command}</span>
                        </div>
                        <div className="pl-4 text-[var(--muted-text-color)]">{entry.output}</div>
                    </div>
                ))}
                <div className="flex items-center">
                    <span className="text-[var(--terminal-green)] mr-2">$</span>
                    <div className="relative flex-grow">
                        <input
                            ref={inputRef}
                            type="text"
                            value={currentCommand}
                            onChange={(e) => setCurrentCommand(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full bg-transparent outline-none text-[var(--text-color)]"
                            autoFocus
                        />
                    </div>
                </div>
            </div>
            <div className="text-xs text-[var(--muted-text-color)] p-1 border-t border-[var(--border-color)] sticky bottom-0 bg-[#1a1a1a] z-10">
                Type JavaScript commands and press Enter to execute
            </div>
        </div>
    )
}