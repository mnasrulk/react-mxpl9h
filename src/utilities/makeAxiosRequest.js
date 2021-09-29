import axios from 'axios';

export default function makeAxiosRequest(endpoint){
    let source = axios.CancelToken.source()

    const makeRequest = async () => {
        const cancelToken = source.CancelToken
        const config = {
            method: 'POST',
            url: process.env.REACT_APP_BACKURI,
            data: {endpoint},
            withCredentials: true,
            cancelToken
        }
        try{
            var result = await axios(config)
        }catch (error){
            if (axios.isCancel(error)) return
            return error
        }

        return result.data
    }

    return [source, makeRequest]
}