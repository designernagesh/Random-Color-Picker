const ResultBox = ({bgColor, colorHandler}) => {
    return (
        <>
            <div className="boxStyle" style={{ backgroundColor: bgColor }} onClick={ colorHandler }>
                { bgColor }
            </div>
        </>
    )
}

export default ResultBox;