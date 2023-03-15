<script lang="ts">
import {
    Badge,
    Button,
    Table,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Breadcrumb,
    BreadcrumbItem

} from 'sveltestrap';
import { Data } from "../lib/stores/data"

let data = new Data();

let page: number = 0;
let showPopup = false;
const togglePopup = () => (showPopup = !showPopup);

let doOnEnter = (e: any, f: () => any) => {
    if (e.key === 'Enter') {
        f();
    }
}

let addFirstPerson = () => {
    if (data.firstPerson === "aaa") {
        gotoPage(-1);
    } else if (data.firstPerson.trim().length > 0) {
        data.people = [...data.people, data.firstPerson.trim()].sort();

        page = 1;
    }
}

let addPerson = () => {
    if (data.newPerson.trim().length > 0) {
        if (data.people.includes(data.newPerson.trim()) === false) {
            data.people = [...data.people, data.newPerson.trim()].sort();
        }
        data.newPerson = ""
    }
}

let removePerson = (person: string) => {
    if (person.trim() !== data.firstPerson.trim()) {
        data.people = data.people.filter(x => x !== person.trim());
    }
}

let addAchievement = () => {
    if (data.newAchievement.trim().length > 0) {
        data.achievements = [...data.achievements, data.newAchievement.trim()].sort();
        data.newAchievement = ""
    }
}
let removeAchievement = (achievement: string) => {
    data.achievements = data.achievements.filter(x => x !== achievement.trim());
}

let toggleAward = (person: string, achievement: string, value: string) => {
    // Check if the award is already in the array.
    if (data.awards.filter(x => x.person === person && x.achievement === achievement && x.value === value).length === 0) {
        // If not, then add.
        data.awards = [...data.awards, {
            person: person,
            achievement: achievement,
            value: value
        }];
    } else {
        // If so, remove.
        data.awards = data.awards.filter(x => x.person !== person || x.achievement !== achievement || x.value !== value);
    }
}

let gotoPage = (index: number, areYouSure = false) => {

    showPopup = false;

    if (index === -1) {
        data.firstPerson = "Bob";
        data.people = ["Farzal", "Florian", "Mariia"];
        data.achievements = ["Build an MVP in only 6 days", "Break even"];
        data.awards = [];

        page = 0;
    } else if (index === 0) {
        if (areYouSure) {
            data.firstPerson = ""
            data.people = [];
            data.achievements = [];
            data.awards = [];

            page = 0;
        } else {
            showPopup = true;
        }

    } else {
        page = index;
    }
}
</script>

<Breadcrumb class="mb-5">
<BreadcrumbItem>
<a href="#" on:click={() => gotoPage(0) }>
    <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="#3e6fac" aria-hidden="true" style="width: 16px; height: 16px;">
        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
    </svg>
    <span class="sr-only">Home</span>
</a>
</BreadcrumbItem>

<BreadcrumbItem>
{#if page >= 1}
<a href="#" on:click={() => gotoPage(1) }>Team</a>
{:else}
<span>Team</span>
{/if}
</BreadcrumbItem>

<BreadcrumbItem active>{#if page >= 2}
<a href="#" on:click={() => gotoPage(2) }>Achievements</a>
{:else}
<span>Achievements</span>
{/if}
</BreadcrumbItem>

<BreadcrumbItem active>{#if page >= 3}
<a href="#" on:click={() => gotoPage(3) }>Contributors</a>
{:else}
<span>Contributors</span>
{/if}
</BreadcrumbItem>

<BreadcrumbItem active>{#if page >= 4}
<a href="#" on:click={() => gotoPage(4) }>Report</a>
{:else}
<span>Report</span>
{/if}
</BreadcrumbItem>
</Breadcrumb>



{#if page === 0}

<Form>
    <FormGroup>
        <Label for="Name"><h1>What is your name?</h1></Label>
        <Input
            on:keypress={(e) => doOnEnter(e, addFirstPerson)}
        bind:value={data.firstPerson}
        />
    </FormGroup>
</Form>
{#if data.firstPerson.length > 0}

<Button
    on:click={() => addFirstPerson() }
    color="primary"
    >Let's go!</Button>
{/if}
{/if}

{#if page === 1}
<Form>
    <FormGroup>
        <Label for="Name"><h1>Hi {data.firstPerson}! Who else is on your team?</h1></Label>
        <Input
            on:keypress={(e) => doOnEnter(e, addPerson)}
        bind:value={data.newPerson}
        />
    </FormGroup>
    <Button
        on:click={() => addPerson() }
        color="primary"
        >Add</Button>

    {#if data.people.length > 1}
    <Button
        on:click={() => page = 2}
        color="primary"
        >Next</Button>
    {/if}
</Form>

<div class="mt-3">
    {#each data.people as person}
    {#if person === data.firstPerson}
    <span class="mr-3">
        <Badge
            color="danger"
            >{person}</Badge>
    </span>
    {:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="mr-3"
        on:click={() => removePerson(person)}>
        <Badge
            color="secondary"
            >{person}</Badge>
    </span>
    {/if}
    {/each}
</div>
{/if}

{#if page === 2}
<Form>
    <FormGroup>
        <Label for="Name"><h1>What achievements are y'all proud of?</h1></Label>
        <Input
            on:keypress={(e) => doOnEnter(e, addAchievement)}
        bind:value={data.newAchievement}
        />
    </FormGroup>
    <Button
        on:click={() => addAchievement() }
        color="primary"
        >Add</Button>

    {#if data.achievements.length > 0}
    <Button
        on:click={() => page = 3}
        color="primary"
        >Next</Button>
    {/if}
</Form>

<div class="mt-3">
    {#each data.achievements as achievement}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="mr-3"
        on:click={() => removeAchievement(achievement)}>
        <Badge
            color="secondary"
            >{achievement}</Badge>
    </span>
    {/each}
</div>
{/if}

{#if page === 3}

<h1>Celebrate your teammates by giving them a high five!</h1>

<p>For each achievement, which company values were exemplified? And by whom?</p>

{#each data.achievements as achievement}

<h2>{achievement}</h2>
<Table>
    <thead>
        <tr>
            <th>Value</th>
            {#each data.people as person}
            <th class="text-center">{person}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each data.values as value}

        <tr>
            <td>
                <p>{value.name}</p>
                <small>{value.description}</small>
            </td>
            {#each data.people as person}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <td class="text-center"
                on:click={() => toggleAward(person, achievement, value.name)}
                >
                {#if data.awards.filter(x => x.person === person && x.achievement === achievement && x.value === value.name).length == 0}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#5e8fcc" style="width: 24px; height: 24px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                </svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3e6fac" style="width: 24px; height: 24px;">
                    <path d="M10.5 1.875a1.125 1.125 0 012.25 0v8.219c.517.162 1.02.382 1.5.659V3.375a1.125 1.125 0 012.25 0v10.937a4.505 4.505 0 00-3.25 2.373 8.963 8.963 0 014-.935A.75.75 0 0018 15v-2.266a3.368 3.368 0 01.988-2.37 1.125 1.125 0 011.591 1.59 1.118 1.118 0 00-.329.79v3.006h-.005a6 6 0 01-1.752 4.007l-1.736 1.736a6 6 0 01-4.242 1.757H10.5a7.5 7.5 0 01-7.5-7.5V6.375a1.125 1.125 0 012.25 0v5.519c.46-.452.965-.832 1.5-1.141V3.375a1.125 1.125 0 012.25 0v6.526c.495-.1.997-.151 1.5-.151V1.875z" />
                </svg>

                {/if}
            </td>
            {/each}
        </tr>
        {/each}

    </tbody>
</Table>

{/each}

<p>
    {#if data.awards.length > 0}
    <Button
        on:click={() => gotoPage(4)}
        color="primary"
        >Next</Button>
    {/if}
</p>

{/if}

{#if page === 4}
<h1>Here you go!</h1>

<p>Look at you beautiful people. You can be proud of your achievements.</p>

<Table>
    <thead>
        <tr>
            <th>Who</th>
            <th>What</th>
            <th>How</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
        {#each data.awards as award}

        <tr>
            <td>{award.person}</td>
            <td>{award.achievement}</td>
            <td>{award.value}</td>
        </tr>
        {/each}

    </tbody>

</Table>

<Button
    on:click={() => gotoPage(0)}
    color="primary"
    >Start again</Button>

{/if}

<Modal isOpen={showPopup} toggle={togglePopup}>
    <ModalHeader toggle={togglePopup}>Are you sure?</ModalHeader>
    <ModalBody>
        Starting over again will clear your team, achievements and contributors.
    </ModalBody>
    <ModalFooter>
        <Button color="primary" on:click={() => gotoPage(0, true)}>Start over</Button>
        <Button color="secondary" on:click={() => showPopup = false }>Cancel</Button>
    </ModalFooter>
</Modal>
