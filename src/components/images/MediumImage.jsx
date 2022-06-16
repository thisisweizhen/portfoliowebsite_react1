import Zoom from 'react-medium-image-zoom'

const MediumImage = (props) => {
    return (
        <Zoom>
            <img src={props.image} alt="" />
        </Zoom>
    )
}

export default MediumImage