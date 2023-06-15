import { Circles } from  'react-loader-spinner'
import { CirclesWrapper } from './Loader.styled'



export function Loading ({query}) {
    return (
        <CirclesWrapper >
            <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </CirclesWrapper>
    )
}