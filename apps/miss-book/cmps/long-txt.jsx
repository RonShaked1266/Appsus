export function LongTxt({ text }) {


    console.log(text)
    console.log(text.substr(100))

    function getLongTxt() {

        if (text >= 100) return text.substr(100)
        else return ''
    }
    return <section>

        <p>{text.substr(0, 100)}</p>
        <label onClick={getLongTxt()}>read more.. </label>
    </section>




    // export class LongTxt extends React.Component {
    //     handleChange = (ev) => {
    //         console.log(ev.target)
    //         console.log(this.props.text)
    //         console.log(this.props.text.substr(100))
    //         if (this.props.text >= 100) return this.props.text.substr(100)
    //     }

    //     render() {
    //         let str = this.props.text
    //         return <section>

    //             <p>{str.substr(0, 100)}</p>
    //             <label onClick={this.handleChange}>read more.. </label>
    //         </section>



    //     }

}