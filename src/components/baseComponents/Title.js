import { convertToUpperCase } from '../baseComponents/Common'

const Title = ({data}) => {
    const {Title} = data;
    return (
        <h2 className='text-center py-3'>{convertToUpperCase(Title)}</h2>
    )
}

export default Title