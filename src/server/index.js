import axios from 'axios'

let oneLeve = axios.create({
    responseType:'json',
    transformRequest(data){
        return data;
    },
    transformResponse(data){
        let o = {};
        if(data.list){
            o.data = data.list;
            o.origin = 'singer';
        }else if(data.banner){
            o.data = data.data;
            o.banner = data.banner;
            o.origin = 'new-song';
        }else if(data.rank){
            o.data = data.rank.list;
            o.origin = 'rank';
        }else if(data.plist){
            o.data = data.plist.list.info;
            o.origin = 'plist';
        }else if(data.singers){
            o.data = data.singers.list.info;
            o.origin = 'singers-list';
        }else if(data.songs){
            o.data = data.songs.list;
            o.info = data.info;
            o.origin = 'singers-info';
        }
        return o;
    }
})

//huoqu banner 与新歌
export const getNewSongs = () => {
    return ondLeve('/apis?json=true')
}
//获取排行数据
export const getRankList = () => {
    return ondLeve('/apis/rank/list?json=true')
}
//获取歌单数据
export const getPlist = () => {
    return ondLeve('/apis/plist/index?json=true')
}
//获取歌手分类数据
export const getSingers = () => {
    return ondLeve('/apis/singer/class?json=true')
}
//根据歌手分类id，获取歌手分类歌手
export const getSingerList = (params={classid:''}) => {
    return ondLeve(`/apis/singer/list/${params.classid}?json=true`)
}
//根据歌手id，获取歌手歌曲
export const getSingerInfo = (params={singerid:''}) => {
    return ondLeve(`/apis/singer/info/${params.singerid}?json=true`)
}