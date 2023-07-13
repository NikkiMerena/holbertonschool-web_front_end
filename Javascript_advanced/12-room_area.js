const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
      return this.width * this.length; // Calculate the surface area using width and length
    }
  };
  
  const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
  