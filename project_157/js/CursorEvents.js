AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
    console.log("works"); 
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["witch", "misfit", "captain", "batman"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "red",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      console.log("Hello")
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
        if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`);
            const id = el.getAttribute("id");
            if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1,
                });
              }
        }
      })
    },
  });