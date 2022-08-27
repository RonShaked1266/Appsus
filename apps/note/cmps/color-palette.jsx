export function ColorPalette({onSetColor}) {

    return <section className="color-palette">
        <div>
            <button className="red" onClick={() => onSetColor('red') }></button>
            <button className="orange" onClick={() => onSetColor('orange') }></button>
            <button className="yellow" onClick={() => onSetColor('yellow') }></button>
            <button className="green" onClick={() => onSetColor('green') }></button>
            <button className="blue" onClick={() => onSetColor('blue')}></button>
            <button className="purple" onClick={() => onSetColor('purple') }></button>
            <button className="white" onClick={() => onSetColor('white') }></button>
        </div>
    </section>
}