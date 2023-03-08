<script lang="ts">
	import { identity } from 'svelte/internal';
import { spring } from 'svelte/motion';

	// let count = 0;

	// const displayed_count = spring();
	// $: displayed_count.set(count);
	// $: offset = modulo($displayed_count, 1);

	// function modulo(n: number, m: number) {
	// 	// handle negative numbers
	// 	return ((n % m) + m) % m;
	// }

    let page: number = 0;

    // let people : string[] = ["Bob", "Farzal", "Florian", "Mariia"];
    let people : string[] = [];

    let firstPerson = "";
    let addFirstPerson = function() {
    if(firstPerson.trim().length > 0) {
        people = [...people, firstPerson.trim()]; 

        page = 1;
    }
}

    let newPerson = "";
    let addPerson = function() {
        if(newPerson.trim().length > 0) {
            if (people.includes(newPerson.trim()) === false) {
                people = [...people, newPerson.trim()]; 
            }
            newPerson = ""
        }
    }

    let removePerson = function(person: string) {
        if (person !== firstPerson) {
            people = people.filter(x => x !== person);
        }
    }

    let newAchievement = "";
    // let achievements: string[] = ["Build an MVP in only 6 days"];
    let achievements: string[] = [];
    let addAchievement = function() {
        if(newAchievement.trim().length > 0) {
            achievements = [...achievements, newAchievement.trim()]; 
            newAchievement = ""
        }
    }

    let awards: {person:string, achievement: string}[] = [];
    let award = function(person: string, achievement: string) {
        awards = [...awards, {person: person, achievement: achievement}];
    }

    let reset = function() {

        firstPerson = ""
        people = [];
        achievements = [];
        awards = [];

        page = 0;
    }

</script>



{#if page === 0}
    <h1>What is your name?</h1>
    <div>
        <div>
            <div class="mt-2">
              <input bind:value={firstPerson} 
                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
            <div class="mt-2">
                {#if firstPerson.length > 0}
                    <button on:click={() => addFirstPerson() }
                        type="button" 
                        class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    
                    Let's go!</button>
                    {/if}
            </div>
        </div>
    </div>
{/if}

{#if page === 1}

    <h1>Hi {firstPerson}! Who else is on your team?</h1>
    <div>
        <div>
            <div class="mt-2">
              <input bind:value={newPerson} 
                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
            <div class="mt-2">

            <button on:click={() => addPerson() }
                type="button" 
                class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                
                Add</button>

                {#if people.length > 1}
                <button on:click={() => page = 2}
                    type="button" 
                    class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Next</button>
                    {/if}
              </div>
              </div>

    </div>

    <div class="mt-5">
    {#each people as person, i}
        <button 
            on:click={() => removePerson(person)}
            type="button" 
            class="mr-2 rounded bg-white py-1 px-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            {person}</button>
    {/each}
</div>
{/if}


{#if page === 2}

    <h1>Step 2: Add achievements</h1>
    <div>
        <input bind:value={newAchievement}>
        <button on:click={() => addAchievement() }>Add</button>  
    </div>

    {#each achievements as achievement}
        <p>{achievement}</p>
    {/each}

    <p>
        <button on:click={() => page = 1}>Previous</button>
        {#if achievements.length > 0}
            <button on:click={() => page = 3}>Next</button>
        {/if}
    </p>
{/if}

{#if page === 3}
    <h1>Step 3: Award contributors</h1>

    <table>
        <tr>
            <td></td>
            {#each people as person}
                <td>{person}</td>
            {/each}
        </tr>

        {#each achievements as achievement}
            <tr>
                <td>
                    {achievement}
                </td>
                {#each people as person}
                    <td>
                        {#if awards.filter(x => x.person === person && x.achievement === achievement).length == 0}
                            <button on:click={() => award(person, achievement)}>Award</button>
                        {:else}
                            Awarded
                        {/if}
                    </td>
                {/each}
            </tr>
        {/each}
    </table>

    <p>
        <button on:click={() => page = 2}>Previous</button>
        {#if awards.length > 0}
            <button on:click={() => page = 4}>Next</button>
        {/if}
    </p>

{/if}

{#if page === 4}
    <h1>Step 4: Report</h1>

    <table>
        <tr>
            <td>achievement</td>
            <td>contributor</td>
        </tr>

        {#each awards as award}
            <tr>
                <td>{award.achievement}</td>
                <td>{award.person}</td>
            </tr>
        {/each}
    
    </table>

    <p>
        <button on:click={() => page = 3}>Previous</button>
    </p>

{/if}

{#if page > 1}
 <p>
    <button on:click={() => reset()}>Reset</button>
 </p>
{/if}

<!-- 


<div class="counter">




	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button on:click={() => (count += 1)} aria-label="Increase the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div> -->

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
