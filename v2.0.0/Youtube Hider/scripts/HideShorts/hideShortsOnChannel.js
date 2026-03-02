window.hideShortsOnChannel = (state) => {
    
    try{

        let shorts = document.querySelectorAll("yt-tab-shape");

        shorts.forEach((short) => {
            
            if (short.attributes[4].nodeValue.includes("Shorts")) {
                
                short.style.display = state ? "none" : "";
            }
        })

    }catch(e){
        
    }

}