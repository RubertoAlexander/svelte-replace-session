<script lang="ts">
    import { page } from '$app/stores';
    
</script>

{#if $page.data.user}
    <p>Logged in as {$page.data.user.name}</p>
{:else}
    <p>Not logged in</p>
{/if}

<slot />