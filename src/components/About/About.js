import React from 'react';

function About() {
	return (
		<div className="info-modal">
			<header className="info-header">
				<h2>
					Conways' Game of life
				</h2>
			</header>
			<main className="info-body">
				<section className="info-section info-about">
					<h3>
						About the game
					</h3>
					<p>
						In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. Von Neumann was thinking about an engineering solution which would use electromagnetic components floating randomly in liquid or gas. This turned out not to be realistic with the technology available at the time. Stanislaw Ulam invented cellular automata, which were intended to simulate von Neumann's theoretical electromagnetic constructions. Ulam discussed using computers to simulate his cellular automata in a two-dimensional lattice in several papers. In parallel, von Neumann attempted to construct Ulam's cellular automaton. Although successful, he was busy with other projects and left some details unfinished. His construction was complicated because it tried to simulate his own engineering design. Over time, simpler life constructions were provided by other researchers, and published in papers and books.
					</p>
					<p>
						Motivated by questions in mathematical logic and in part by work on simulation games by Ulam, among others, John Conway began doing experiments in 1968 with a variety of different two-dimensional cellular automaton rules. Conway's initial goal was to define an interesting and unpredictable cell automaton. For example, he wanted some configurations to last for a long time before dying and other configurations to go on forever without allowing cycles. It was a significant challenge and an open problem for years before experts on cellular automata managed to prove that, indeed, the Game of Life admitted of a configuration which was alive in the sense of satisfying Von Neumann's two general requirements. While the definitions before the Game of Life were proof-oriented, Conway's construction aimed at simplicity without a priori providing proof the automaton was alive.
					</p>
					<p>
						Conway chose his rules carefully, after considerable experimentation, to meet these criteria:
					</p>
					<ul>
						<li>
						There should be no explosive growth.
						</li>
						<li>
						There should exist small initial patterns with chaotic, unpredictable outcomes.
						</li>
						<li>
						There should be potential for von Neumann universal constructors.
						</li>
						<li>
						The rules should be as simple as possible, whilst adhering to the above constraints.
						</li>
						<p>
							The game made its first public appearance in the October 1970 issue of Scientific American, in Martin Gardner's "Mathematical Games" column. Theoretically, the Game of Life has the power of a universal Turing machine: anything that can be computed algorithmically can be computed within the Game of Life. Gardner wrote, "Because of Life's analogies with the rise, fall and alterations of a society of living organisms, it belongs to a growing class of what are called 'simulation games' (games that resemble real life processes)."
						</p>
					</ul>
					<p>
						Since its publication, the Game of Life has attracted much interest because of the surprising ways in which the patterns can evolve. It provides an example of emergence and self-organization. Scholars in various fields, such as computer science, physics, biology, biochemistry, economics, mathematics, philosophy, and generative sciences, have made use of the way that complex patterns can emerge from the implementation of the game's simple rules. The game can also serve as a didactic analogy, used to convey the somewhat counter-intuitive notion that design and organization can spontaneously emerge in the absence of a designer. For example, cognitive scientist Daniel Dennett has used the analogy of the Game of Life "universe" extensively to illustrate the possible evolution of complex philosophical constructs, such as consciousness and free will, from the relatively simple set of deterministic physical laws which might govern our universe.
					</p>
					<p>
						The popularity of the Game of Life was helped by its coming into being at the same time as increasingly inexpensive computer access. The game could be run for hours on these machines, which would otherwise have remained unused at night. In this respect, it foreshadowed the later popularity of computer-generated fractals. For many, the Game of Life was simply a programming challenge: a fun way to use otherwise wasted CPU cycles. For some, however, the Game of Life had more philosophical connotations. It developed a cult following through the 1970s and beyond; current developments have gone so far as to create theoretic emulations of computer systems within the confines of a Game of Life board.
					</p>
					<span>
						source: Wikipedia [<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Origins" target="_blank" rel="noopener noreferrer">Origins</a>]
					</span>
				</section>
				<section className="info-section info-rules">
					<h3>
						Rules of the game
					</h3>
					<p>
						The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
					</p>
					<ul>
						<li>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
						<li>Any live cell with two or three live neighbours lives on to the next generation.</li>
						<li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
						<li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
					</ul>
					<p>
						These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
					</p>
					<ul>
						<li>Any live cell with two or three live neighbours survives.</li>
						<li>Any dead cell with three live neighbours becomes a live cell.</li>
						<li>All other live cells die in the next generation. Similarly, all other dead cells stay dead.</li>
					</ul>
					<p>
						The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.
					</p>
					<span>
						source: Wikipedia [<a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules" target="_blank" rel="noopener noreferrer">Rules</a>]
					</span>
				</section>
			</main>
		</div>
	)}

export default About;
