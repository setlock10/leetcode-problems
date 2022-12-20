// 841. Keys and Rooms

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    let hash = {};
    
    
    let queue = [];
        for (let i = 0; i < rooms[0].length; i++){
            queue.push(rooms[0][i])
            hash[0] = true;
        }

//console.log(rooms.length);
    
    while (queue.length > 0){
        let room = queue.shift();
        //console.log(room);
            hash[room] = true;
       
        for (let i = 0; i < rooms[room].length; i++){
            console.log(room)
                 //console.log(rooms[room][i])
          
            if (!hash[rooms[room][i]])
                queue.push(rooms[room][i])
            
        }

        
    }
    
    
    
    console.log(hash);
    for (let n = 0; n < rooms.length; n++){
        //console.log(hash[n])
        if (!hash[n])
            return false;
    }
    return true;
    
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))
//console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))
