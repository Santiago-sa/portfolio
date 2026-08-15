import type { ReactNode } from 'react'

interface CodeLineProps {
  number: string
  content: ReactNode
  indent?: number
}

function CodeLine({
  number,
  content,
  indent = 0,
}: CodeLineProps) {
  return (
    <div className="flex">
      <span
        className="
          w-7
          shrink-0
          select-none
          text-[#30304b]
        "
      >
        {number}
      </span>

      <span style={{ paddingLeft: `${indent * 20}px` }}>
        {content}
      </span>
    </div>
  )
}

export function CodeTerminal() {
  return (
    <div
      className="
        terminal-glow
        w-full
        overflow-hidden
        rounded-[14px]
        border
        border-white/[0.07]
        bg-[rgba(8,8,20,0.8)]
        backdrop-blur-xl
      "
    >
      {/* Terminal header */}
      <div
        className="
          flex
          items-center
          gap-[9px]
          border-b
          border-white/[0.05]
          bg-[rgba(4,4,14,0.8)]
          px-4
          py-[11px]
        "
      >
        <div className="flex gap-[6px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
        </div>

        <span
          className="
            flex-1
            text-center
            font-mono
            text-[11px]
            text-[#4848a0]
          "
        >
          ~/portfolio/santiago
        </span>
      </div>

      {/* Code */}
      <div
        className="
          px-[22px]
          py-5
          font-mono
          text-[12.5px]
          leading-[1.9]
        "
      >
        <CodeLine
          number="1"
          content={
            <>
              <span className="text-[#7c3aed]">const</span>{' '}
              <span className="text-[#00d4ff]">developer</span>
              <span className="text-[#e8e8f0]"> = {'{'}</span>
            </>
          }
        />

        <CodeLine
          number="2"
          indent={1}
          content={
            <>
              <span className="text-[#63d7a4]">name</span>
              <span className="text-[#e8e8f0]">: </span>
              <span className="text-[#f0a35b]">
                "Santiago Alvarez Hernández"
              </span>
              <span className="text-[#e8e8f0]">,</span>
            </>
          }
        />

        <CodeLine
          number="3"
          indent={1}
          content={
            <>
              <span className="text-[#63d7a4]">role</span>
              <span className="text-[#e8e8f0]">: </span>
              <span className="text-[#f0a35b]">
                "Full Stack Developer"
              </span>
              <span className="text-[#e8e8f0]">,</span>
            </>
          }
        />

        <CodeLine
          number="4"
          indent={1}
          content={
            <>
              <span className="text-[#63d7a4]">stack</span>
              <span className="text-[#e8e8f0]">: [</span>
            </>
          }
        />

        <CodeLine
          number="5"
          indent={2}
          content={
            <>
              <span className="text-[#f0a35b]">"React"</span>
              <span className="text-[#e8e8f0]">, </span>

              <span className="text-[#f0a35b]">"Node.js"</span>
              <span className="text-[#e8e8f0]">, </span>

              <span className="text-[#f0a35b]">"NestJS"</span>
              <span className="text-[#e8e8f0]">, </span>

              <span className="text-[#f0a35b]">"Flutter"</span>
            </>
          }
        />

        <CodeLine
          number="6"
          indent={1}
          content={
            <span className="text-[#e8e8f0]">],</span>
          }
        />

        <CodeLine
          number="7"
          indent={1}
          content={
            <>
              <span className="text-[#63d7a4]">passion</span>
              <span className="text-[#e8e8f0]">: </span>
              <span className="text-[#f0a35b]">
                "Resolver problemas"
              </span>
            </>
          }
        />

        <CodeLine
          number="8"
          content={
            <span className="text-[#e8e8f0]">
              {'}'}
            </span>
          }
        />

        {/* Terminal command */}
        <div className="mt-[14px] flex items-center gap-1">
          <span className="text-[#4848a0]">
            {'> '}
          </span>

          <span className="text-[#00ffaa]">
            buildSomethingAmazing()
          </span>

          <span className="cursor-blink text-[#e8e8f0]">
            ▋
          </span>
        </div>
      </div>
    </div>
  )
}