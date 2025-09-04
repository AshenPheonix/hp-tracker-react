export const Screen = (text, dispatch)=>{
    return (
        <section>
            <p>{text}</p>
            <button onClick={dispatch}>Finish</button>
        </section>
    )
}