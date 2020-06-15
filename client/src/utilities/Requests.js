import instance from "./axios/axios";


export const fetchData = (url, callBack) => {
    instance
        .get(`${url}`)
        .then(res => callBack(res.data))
        .catch(err => console.log(err))
};
export const postData = (url, data, callBack) => {
  instance
      .post(url, data)
      .then(() => callBack())
      .catch(err => console.log(err))
};
export const deleteData = (url, callBack) => {
    instance
        .delete(url)
        .then(() => callBack())
        .catch(err => console.log(err))
}