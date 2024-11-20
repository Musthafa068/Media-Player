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

// api call for category 

export const addCategory=async(categoryDetails)=>{
    return await commonAPI("POST",`${server_url}/allcategory`,categoryDetails)
  
  }


// api call for get all category
export const  getAllCategory=async()=>{
    return await commonAPI("GET",`${server_url}/allcategory`,"")
}


// api call for delete category

export const deleteCategory=async(categoryId)=>{
    return await commonAPI("DELETE",`${server_url}/allcategory/${categoryId}`,{})

}


// api call for getting single video 
export const  getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${videoId}`,"")
}


// api call for updating category
export const  updateCategory=async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/allcategory/${categoryId}`,categoryDetails)
}


// api call for getting single category

export const  getSingleCategory=async(categoryId)=>{
    return await commonAPI("GET",`${server_url}/allcategory/${categoryId}`,"")
}