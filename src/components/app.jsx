import React, {Component} from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

    render() {
        const gifs = [
            { id: "ftqLysT45BJMagKFuk",
              id: "XD2M4wy7GagcaYneyF",
              id: "WQN7I4t7gCPZfbBUXL"
            }
        ];
        return(
            <div>
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif id="ftqLysT45BJMagKFuk"/>
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs = {gifs}/>
                </div>
            </div>
        );
    }
}

export default App;