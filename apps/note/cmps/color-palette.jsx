export function ColorPalette({getColor}) {
    return <section className="color-palette">
        <div>
            <button className="red">🔴</button>
            <button>🟠</button>
            <button>🟡</button>
            <button onClick={() => getColor('green') }>🟢</button>
            <button>🔵</button>
            <button>🟣</button>
        </div>
        

    </section>

}