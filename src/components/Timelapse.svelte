<script lang="ts">
    // This bobble is for calculating the length of timelapses using
    // a variety of settings. 
    // It's for personal use, so the pre-existing options are the ones
    // available in my Xiaomi Yi 4k Action Camera
    export let show = false; 
    function handleClick(){
        show = !show;
    }   
    let videoLength: number;
    let videoFrames: number;
    let frameInterval: number;
    let frameRateSelected: number = 30;
    let frameRateOptions: Array<number> = [24, 30, 60, 120];
    let frameIntervalSelected: number = 0.5;
    let frameIntervalOptions: Array<number> = [0.5, 1, 2, 5, 10, 30, 60];
    let captureDuration: number = (3600);
    let calculatedVideoLength: number;
    function getVideoLength (){
        calculatedVideoLength = (captureDuration/(frameIntervalSelected * frameRateSelected)) 
        return calculatedVideoLength;
    }
    // K. I assume the intervals mean "how long it takes to get one frame"
    // If that's true, the 1 second setting would take a frame every second.
    // Then, if my framerate is 30, it would take 30 seconds to make 1 second
    // of timelapse video. So FPS:30, ITVL:1, CAP:3600 (1hr) SHOULD be
    // a video off length 3600/30 seconds long or 120 seconds or 2 minutes. 
    // and if you're taking ITVL twice as fast or slow it should be half/twice
    // time of two minutes. So those are my tests for the algorithm. 
    // Heave ho, robot. 
    console.log(getVideoLength());
    // Test 1 with 1.0spf / 30fps / 3600s Pass 120
    // Test 2 with 2.0spf / 30fps / 3600s Fail 240
        // Rearranged algorigthm
    // Test 3 with 2.0spf / 30fps / 3600s Pass 60
    // GG. Now you can use it.
</script>

<div class="evenbiggermofo">
<div class="wholemofo">
    <div on:click="{handleClick}">
        <button>Timelapse Calculator</button>
    </div>
    {#if show}
    <div class="flex-container">
        
        <div class="flex-item">
            <span>Frames per Second</span>
            <div class="selectorGrid">
                {#each frameRateOptions as option}
                        <label for="{option.toString()}">
                            <input type="radio" name="frameRateSelected" id="{option.toString()}" bind:group="{frameRateSelected}" value="{option}">
                            {option.toString()}
                        </label>
                    
                {/each}
            </div>
        </div>
        
        <div class="flex-item">
            <span>Seconds per Frame</span> 
            <div class="selectorGrid">
                {#each frameIntervalOptions as option}
                    <label for="{option.toString()}">
                        <input type="radio" name="frameIntervalSelected" id="{option.toString()}" bind:group="{frameIntervalSelected}" value="{option}">
                        {option.toString()}
                    </label> 
                {/each}
            </div>
        </div>
        
        <div class="flex-item">
            <span>Recording Duration (s)</span>
            <div class="textbox">
                <input type="number" bind:value="{captureDuration}" required name="captureDuration">
            </div> 
        </div>
    </div> 
    <span class="example-spacer"></span>
    <div class="flex-container">
        <div class="flex-item">
            <button on:click="{getVideoLength}">
                Calculate
            </button>
        </div>
        <div class="flex-item">
            <span>Timelapse Length:</span><br>
            {#if calculatedVideoLength}
            <span>{calculatedVideoLength}s / {calculatedVideoLength/60}m</span>
            {/if}
        </div>
            
        
    </div>
    {/if}
</div>
</div>
<style>
    .flex-container {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
    }
    .flex-item {
        flex: auto;
        width: 100px;
        margin: 25px;
        padding: 25px;
        border: black 1px solid;
        border-radius: 2em;
        text-align: center;
    }
    .selectorGrid {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 3em);
        grid-template-rows: repeat(3, 3em);
        margin-top: 10px;
    }
    input {
        margin: 0;
    }
    .example-spacer {
        flex: 1 1 auto;
    }
    input[type="number"] {
        width: 75px;
        margin-top: 10px;
    }
    .wholemofo {
        text-align: center;
    }
    .evenbiggermofo {
        flex: 1 1 0%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    }
</style>