<script>
    let paladins = [
        {
            "name": "Andrew Cuomo",
            "description": "Governor of New York State"
        },
        {
            "name": "Melissa DeRosa",
            "description": "Top Aide to Andrew Cuomo"
        },
        {
            "name": "Alexander Vindman",
            "description": "United States Army lieutenant colonel (retired)"
        },
        {
            "name": "Adam Schiff",
            "description": "United States congressman"
        },
        {
            "name":"Kai",
            "description":"The Aspired One"
        }
        
    ]
</script>

<div>
    <p>I believe that the people on this list are selflessly acting on ideals bigger than themselves and for the common good. That, to me, makes them worthy of respect and honour. I aspire to be among their ranks, as they represent the core ideals of a Paladin.</p>

    {#each paladins as paladin}
         <li>{paladin.name} - {paladin.description}</li>
    {/each}
</div>