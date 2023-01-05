<script lang="ts">

    const login = async () => {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json()
        document.cookie = `token=${data.user.name}`
    }

    const logout = async () => {
        const res = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        // delete the token cookie
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

        console.log('logged out', document.cookie)
    }
        

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={login}>login</button>

<button on:click={logout}>logout</button>
