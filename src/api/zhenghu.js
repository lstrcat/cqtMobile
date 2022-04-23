// 导入axios实例
import service from '../request/index'

export const apiGetZsInfo = (no) => {
    return service({
        method: "get",
        params: no,
    })
}
export default {
    apiGetZsInfo
};

