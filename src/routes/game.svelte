<script lang="ts">
    import { onMount } from "svelte";
    import firebase from "../firebase"
    let db = firebase.firestore();
    let uberPuzzle:any = {puzzleCreated: "", letterSelection: ""};
    

    function startGame () {
        console.log("I'm just starting now.")
        console.log(firebase.auth().currentUser)
        console.log(db);
        db.collection("dailypuzzle").doc("20201001").get().then(function(doc){
                if (doc.exists){
                    console.log(doc.data());
                    uberPuzzle = doc.data();
                } else {
                    console.log("error, no data here");
                }
            });
    }
    onMount(
        startGame
    )
</script>

<div>
    <h1>Game Page Test</h1>
    <h2>{uberPuzzle.letterSelection}</h2>
</div>