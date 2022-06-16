const Persona = (props) => {
    return (
        <div className="flex flex-col gap-4 items-center lg:w-2/6 w-full">
            <img className='' src={props.image} alt="" />
            <div className="rounded-md px-3 py-1 bg-amber-200 text-center font-bold">
                {props.name}
            </div>

            <div className="flex flex-col gap-2 font-semibold text-center">
                {
                    props.list.map((item, index) => {
                        return (
                            <div
                                key={index}
                            >
                                - {item}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Persona