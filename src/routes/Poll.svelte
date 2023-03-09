<script lang="ts">
let page: number = 0;

let doOnEnter = (e: any, f: () => any) => {
    if (e.key === 'Enter') {
        f();
    }
}

let people: string[] = ["Farzal", "Florian", "Mariia"];
// let people : string[] = [];

let firstPerson = "Bob";
// let firstPerson = "";
let addFirstPerson = () => {
    if (firstPerson.trim().length > 0) {
        people = [...people, firstPerson.trim()];

        page = 1;
    }
}

let newPerson = "";
let addPerson = () => {
    if (newPerson.trim().length > 0) {
        if (people.includes(newPerson.trim()) === false) {
            people = [...people, newPerson.trim()];
        }
        newPerson = ""
    }
}

let removePerson = (person: string) => {
    if (person.trim() !== firstPerson.trim()) {
        people = people.filter(x => x !== person.trim());
    }
}

let values: {
    name: string,
    description: string
} [] = [{
        name: "Empathy",
        description: "Listen actively and respect others' opinions and perspectives."
    },
    {
        name: "Empowerment",
        description: "Take initiative and propose new ideas to improve processes or solve problems."
    },
    {
        name: "Innovation",
        description: "Look for new and better ways to do things, and don't be afraid to experiment."
    },
    {
        name: "Inclusion",
        description: "Create a diverse and inclusive workplace where everyone feels welcome and respected."
    },
    {
        name: "Customer focus",
        description: "Use customer feedback to inform decisions and improve processes."
    },
    {
        name: "Growth Mindset",
        description: "Seek out new opportunities for learning and development, both within and outside the organization."
    }
];

let newAchievement = "";
let achievements: string[] = ["Build an MVP in only 6 days", "Break even"];
//let achievements: string[] = [];
let addAchievement = () => {
    if (newAchievement.trim().length > 0) {
        achievements = [...achievements, newAchievement.trim()];
        newAchievement = ""
    }
}
let removeAchievement = (achievement: string) => {
    achievements = achievements.filter(x => x !== achievement.trim());
}

let awards: {
    person: string,
    achievement: string,
    value: string
} [] = [];
let toggleAward = (person: string, achievement: string, value: string) => {
    if (awards.filter(x => x.person === person && x.achievement === achievement && x.value === value).length === 0) {
        awards = [...awards, {
            person: person,
            achievement: achievement,
            value: value
        }];
    } else {
        awards = awards.filter(x => x.person !== person && x.achievement !== achievement && x.value !== value);
    }
}

let gotoPage = (index: number) => {

    if (index === 0) {

        if (window.confirm("Are you sure you want to start over again?")) {
            firstPerson = ""
            people = [];
            achievements = [];
            awards = [];

            page = 0;
        }

    } else {
        page = index;
    }
}
</script>

<nav class="flex mb-10" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
        <li>
            <div>
                <a href="#" on:click={() => gotoPage(0) } class="text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>

        <li>
            <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>

                {#if page >= 1}
                <a href="#" on:click={() => gotoPage(1) } class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Team</a>
                {:else}
                <span class="ml-4 text-sm font-medium text-gray-300" aria-current="page">Team</span>
                {/if}

            </div>
        </li>

        <li>
            <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                {#if page >= 2}
                <a href="#" on:click={() => gotoPage(2) } class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Achievements</a>
                {:else}
                <span class="ml-4 text-sm font-medium text-gray-300" aria-current="page">Achievements</span>
                {/if}

            </div>
        </li>

        <li>
            <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                {#if page >= 3}
                <a href="#" on:click={() => gotoPage(3) } class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Contributors</a>
                {:else}
                <span class="ml-4 text-sm font-medium text-gray-300" aria-current="page">Contributors</span>
                {/if}
            </div>
        </li>

        <li>
            <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                {#if page >= 4}
                <a href="#" on:click={() => gotoPage(4) } class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">Report</a>
                {:else}
                <span class="ml-4 text-sm font-medium text-gray-300" aria-current="page">Report</span>
                {/if}
            </div>
        </li>
    </ol>
</nav>

{#if page === 0}
<h1 class="text-base font-semibold leading-6 text-gray-900">What is your name?</h1>
<div>
    <div>
        <div class="mt-2">
            <input
                on:keypress={(e) => doOnEnter(e, addFirstPerson)}
            bind:value={firstPerson}
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

<h1 class="text-base font-semibold leading-6 text-gray-900">Hi {firstPerson}! Who else is on your team?</h1>
<div>
    <div>
        <div class="mt-2">
            <input
                on:keypress={(e) => doOnEnter(e, addPerson)}

            bind:value={newPerson}
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

<h1 class="text-base font-semibold leading-6 text-gray-900">What achievements are y'all proud of?</h1>
<div>
    <div>
        <div class="mt-2">
            <input
                on:keypress={(e) => doOnEnter(e, addAchievement)}
            bind:value={newAchievement}
            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div class="mt-2">

            <button on:click={() => addAchievement() }
                type="button"
                class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                Add</button>

            {#if achievements.length > 0}
            <button on:click={() => page = 3}
                type="button"
                class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Next</button>
            {/if}
        </div>
    </div>

</div>

<div class="mt-5">
    {#each achievements as achievement, i}
    <button
        on:click={() => removeAchievement(achievement)}
        type="button"
        class="mr-2 rounded bg-white py-1 px-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {achievement}</button>
    {/each}
</div>
{/if}

{#if page === 3}

{#each achievements as achievement}

<div class="px-4 sm:px-6 lg:px-8 mb-12">
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">{achievement}</h1>
        </div>
    </div>
    <div class="mt-8 flow-root">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"></th>
                            {#each people as person}
                            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">{person}</th>
                            {/each}
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {#each values as value}

                        <tr>
                            <td>
                                {value.name}
                                <p class="text-xs w-56">{value.description}</p>
                            </td>
                            {#each people as person}
                            <td
                                on:click={() => toggleAward(person, achievement, value.name)}
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                {#if awards.filter(x => x.person === person && x.achievement === achievement && x.value === value.name).length == 0}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                {:else}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {/if}
                            </td>
                            {/each}
                        </tr>

                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

{/each}

<p>
    {#if awards.length > 0}
    <button on:click={() => gotoPage(4)}
        type="button"
        class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Next</button>
    {/if}
</p>

{/if}

{#if page === 4}
<h1 class="text-base font-semibold leading-6 text-gray-900">Here you go!</h1>

<div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <p class="mt-2 text-sm text-gray-700">Look at you beautiful people. You can be proud of your achievements.</p>
        </div>
    </div>
    <div class="mt-8 flow-root">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Who</th>
                            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">What</th>
                            <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">How</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        {#each awards as award}

                        <tr>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{award.person}</td>
                            <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{award.achievement}</td>
                            <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{award.value}</td>
                        </tr>
                        {/each}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<button on:click={() => gotoPage(0)}
    type="button"
    class="rounded bg-indigo-600 py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Start again</button>
{/if}
