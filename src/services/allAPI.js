import commonAPI from "./commonAPI"
import server_url from "./sever_url"

// save video
// save video api called by add.jsx

export const addVideo=async(video)=>{

    return await commonAPI("POST",`${server_url}/allVideos`,video)

}


// api call for get all videos

export const  getAllVideos=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}


// api call for delete video card

export const deleteVideo=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${videoId}`,{})

}

// api call for watch history

export const saveHistory=async(video)=>{
  return await commonAPI("POST",`${server_url}/history`,video)

}

// api call for get history
export const  getAllHistory=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// api call for delete history

export const deleteHistory=async(videoId)=>{
    return await commonAPI("DELETE",`${server_url}/history/${videoId}`,{})

}