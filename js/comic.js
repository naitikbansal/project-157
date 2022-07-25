AFRAME.registerComponent("comic", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "captain-aero",
          url: "./assets/posters/captain-aero-poster.jpg",
        },
        {
          id: "outer-space",
          url: "./assets/posters/outer-space-poster.jpg",
        },
  
        {
          id: "Spiderman",
          url: "./assets/posters/spiderman-poster.jpg",
        },
        {
          id: "Superman",
          url: "./assets/posters/superman-poster.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl=this.createBorder(position,item.id)
        // Thumbnail Element
       const thumbNail=this.createThumbNail(item)
       borderEl.appendChild(thumbNail)
        // Title Text Element
        const titleEl=this.createTitleEl(position,item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"ring",
        radiusInner:9,
        radiusOuter:10
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{
        color:"darkblue",
        opacity:0.4
      })
      return entityEl
    },
  
    createThumbNail:function(item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometry",{
        primitive:"circle",
        radius:9
      })
      entityEl.setAttribute("material",{
        src:item.url
      })
      return entityEl
    },
    
    createTitleEl:function(position,item){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("text",{
        font:"exo2bold",
        align:"center",
        width:60,
        color:"white",
        value:item.title
      })
      const elPosition=position
      elPosition.y=-20
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("position",elPosition)
      
      return entityEl
    }
    
  });
  