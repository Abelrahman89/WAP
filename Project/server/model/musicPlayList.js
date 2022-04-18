let playLists = [{ userId: 1, playListId: 1, songs: [{ id: 1, title: "RUAHA NATIONAL PARK" }, { id: 2, title: "BOLIVIA  NATIONAL PARK", }] },

];
let cnt = 1;
module.exports = class playList {
    constructor(userId, playListId, songs) {
        this.userId = userId;
        this.playListId = playListId;
        this.songs = songs;




    }
    save() {
        let index = playLists.findIndex(b => b.userId == this.userId);
        console.log("body" + index + "this.userId" + this.userId);
        if (index > -1) {
            console.log("hi");
            playLists.splice(index, 1, this);
        }
        else {
            cnt++;
            this.playListId = cnt;

            playLists.push(this);
        }


        return this;
    }

    static fetchAll() {

        return playLists;
    }



    static getByUserId(userId) {
        let playListIndex = playLists.findIndex(b => b.userId == userId);
        console.log('in' + playListIndex);
        if (playListIndex > -1) {
            return playLists[playListIndex];
        }
        else {
            throw console.error("Not Found");
        }
    }

    static delete(userId, songId) {
        let index = playLists.findIndex(b => b.userId == userId);
        let p = playList.getByUserId(userId, songId);
        //console.log('p'+p);
        let songs = p.songs.filter(s => s.id != songId);
        //console.log('sds'+  songs[2].id);
        p.songs=songs;
        //console.log('songsp'+  p.songs);
        playLists.slice(index, 1, p);

        return p;

    }
}