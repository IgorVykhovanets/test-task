import {axiosService} from "../axios.service/axios.service";
import {urls} from "../../configs/urls";

export const albumsService = {
    getAllById: (id) => axiosService.get(`${urls.photos}?albumId=${id}`).then(albums => albums.data)
}