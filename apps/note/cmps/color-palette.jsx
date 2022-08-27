export function ColorPalette({onSetColor}) {

    return <section className="color-palette">
        <div>
            <button onClick={() => onSetColor('red') }>🔴</button>
            <button onClick={() => onSetColor('orange') }>🟠</button>
            <button onClick={() => onSetColor('yellow') }>🟡</button>
            <button onClick={() => onSetColor('green') }>🟢</button>
            <button onClick={() => onSetColor('blue')}>🔵</button>
            <button onClick={() => onSetColor('purple') }>🟣</button>
            <button onClick={() => onSetColor('white') }>⚪</button>
        </div>
    </section>
}