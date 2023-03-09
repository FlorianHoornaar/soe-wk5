<script lang="ts">
let page: number = 0;
let showPopup = false;

let doOnEnter = (e: any, f: () => any) => {
    if (e.key === 'Enter') {
        f();
    }
}

let people : string[] = [];

let firstPerson = "";
let addFirstPerson = () => {
    if (firstPerson === "aaa") {
        gotoPage(-1);
    } else if (firstPerson.trim().length > 0) {
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
let achievements: string[] = [];
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
    // Check if the award is already in the array.
    if (awards.filter(x => x.person === person && x.achievement === achievement && x.value === value).length === 0) {
        // If not, then add.
        awards = [...awards, {
            person: person,
            achievement: achievement,
            value: value
        }];
    } else {
        // If so, remove.
        awards = awards.filter(x => x.person !== person || x.achievement !== achievement || x.value !== value);
    }
}

let gotoPage = (index: number, areYouSure = false) => {

    showPopup = false;

    if (index === -1) {
        firstPerson = "Bob";
        people = ["Farzal", "Florian", "Mariia"];
        achievements = ["Build an MVP in only 6 days", "Break even"];
        awards = [];

        page = 0;
    } else if(index === 0) {
        if (areYouSure) {
            firstPerson = ""
            people = [];
            achievements = [];
            awards = [];

            page = 0;
        } else {
            showPopup = true;
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
                <a href="#" 
                    on:click={() => gotoPage(0) } class="text-gray-400 hover:text-gray-500">
                    <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="#3e6fac" aria-hidden="true">
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
<h1 class="text-xl font-semibold leading-6 text-gray-900">What is your name?</h1>
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
                class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                Let's go!</button>
            {/if}
        </div>
    </div>
</div>
{/if}

{#if page === 1}

<h1 class="text-xl font-semibold leading-6 text-gray-900">Hi {firstPerson}! Who else is on your team?</h1>
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
                class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                Add</button>

            {#if people.length > 1}
            <button on:click={() => page = 2}
                type="button"
                class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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

<h1 class="text-xl font-semibold leading-6 text-gray-900">What achievements are y'all proud of?</h1>
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
                class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                Add</button>

            {#if achievements.length > 0}
            <button on:click={() => page = 3}
                type="button"
                class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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

<h1  class="mb-4 text-xl font-semibold leading-6 text-gray-900">Celebrate your teammates by giving them a high five!</h1>

<p class="mb-10 mt-2 text-sm text-gray-700">For each achievement, which company values were exemplified? And by whom?</p>

{#each achievements as achievement}

<div class="mb-12">
    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">{achievement}</h1>
        </div>
    </div>
    <div class="mt-1 flow-root">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" class="py-3.5 text-left text-sm font-semibold text-gray-900">Value</th>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5e8fcc" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                    </svg>
                                {:else}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3e6fac" class="w-6 h-6">
                                    <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
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
        class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Next</button>
    {/if}
</p>

{/if}

{#if page === 4}
<h1 class="text-xl font-semibold leading-6 text-gray-900">Here you go!</h1>

<div class="">
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
    class="rounded bg-rewardrealm py-1 px-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    Start again</button>
{/if}


{#if showPopup}

<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!--
      Background backdrop, show/hide based on modal state.
  
      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div>
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Are you sure?</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Starting over again will clear your team, achievements and contributors.</p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6 text-center">
            <button 
                on:click={() => gotoPage(0, true)}
                type="button" class="inline-flex justify-center rounded-md bg-rewardrealm px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Start over</button>
            <button 
                on:click={() => showPopup = false }
                type="button" class="inline-flex justify-center rounded-md bg-rewardrealm px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rewardrealmH focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/if}