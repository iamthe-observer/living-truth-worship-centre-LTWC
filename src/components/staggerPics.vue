<script setup lang="ts">
import anime from 'animejs/lib/anime.es'

onMounted(() => {
	let wrapper = document.querySelector<HTMLElement>('#tiles')!

	let columns = Math.floor(wrapper.clientWidth / 30)
	let rows = Math.floor(wrapper.clientHeight / 30)

	const colors = [
		"rgb( 122, 56, 190)",
		"rgb( 22, 56, 190)",
		"rgb( 122, 56, 10)",
		"rgb( 12, 56, 10)",
	]

	let count = -1

	const handleClick = (idx: number) => {
		count = count + 1

		anime({
			targets: ".tile",
			backgroundColor: colors[count % (colors.length - 1)],
			delay: anime.stagger(50, {
				grid: [columns, rows], from: idx
			})
		})
	}

	const initTile = (idx: number) => {
		const tile = document.createElement("div");
		tile.classList.add("tile")
		tile.onclick = e => handleClick(idx)
		return tile
	}

	const initTiles = (quantity: number) => {
		Array.from(Array(quantity)).map((_, idx: number) => {
			wrapper.appendChild(initTile(idx))
		})
	}

	const initGrid = () => {
		wrapper.innerHTML = ''
		columns = Math.floor(wrapper.clientWidth / 30)
		rows = Math.floor(wrapper.clientHeight / 30)
		wrapper.style.setProperty("--columns", columns.toString())
		wrapper.style.setProperty("--rows", rows.toString())
		initTiles(columns * rows)
	}


	initTiles(columns * rows)
	initGrid()
	window.onresize = () => initGrid()
})
</script>

<template>
	<div id="tiles"></div>
</template>

<style>
#tiles {
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	grid-template-rows: repeat(var(--rows), 1fr);
	background: url(https://live.staticflickr.com/65535/52865328454_3edb969606_o.jpg);
}

.tile {
	/* outline: 1px solid black */
}
</style>
