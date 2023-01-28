const section = document.querySelector("section"),
	overlay = document.querySelector(".overlay"),
	football = document.querySelector(".football"),
	cricket = document.querySelector(".cricket"),
	volleyball = document.querySelector(".volleyball"),
	basketball = document.querySelector(".basketball"),
	badminton = document.querySelector(".badminton"),
	tableTennis = document.querySelector(".tableTennis"),
	box = document.querySelector(".modal-box"),
	scroller = document.querySelector(".modalBoxC");
closeBtn = document.querySelector(".close-btn");

football.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
						Matches shall be played according to the rules of the All India
						Football Federation/Women’s Football Federation, unless, otherwise
						modified in these rules.
					</li>
					<li>
						In matches played on knockout basis, if a game ends in draw, 15
						minutes extra time each shall be a part of the normal period of
						play.
					</li>
					<li>
						After the normal period of play (including 15 minutes extra time
						each way) is over, 5 penalty kicks shall be taken by each team, one
						each alternatively.
					</li>
					<li>
						The team scoring the greater number of goals shall be declared as
						winner. If the result is not declared yet, the 6th, 7th, 8th player
						and so on alternatively from each side will take the kicks till the
						result is decided provided that equal number of kicks shall have
						been awarded to each side. Which side shall take the first kick
						shall be decided by the spin of a coin. Before the penalty kick
						begins, each captain shall nominate 5 players to take penalty kick
						on behalf of his/her team. No substitution shall be allowed during
						the tie breaker rule. Unless avoidable, no team shall be called upon
						to play two matches in a day.
					</li>
					<li>
						If under compelling circumstances a team has to play two matches in
						a day, there shall be at least 6 hours’ gap between the end of the
						first match and commencement of the second match. As far as
						possible, no team shall be forced to play matches on more than four
						consecutive days and there shall be one days’ gap between the final
						and semi-finals’. No player shall be permitted to participated in
						the tournament without football shoes.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

cricket.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
					All rounds will be knock-out rounds.
					</li>
					<li>
					Matches will be played in daylight with a red leather season ball on turf.
					</li>
					<li>
					Minimum 11 and maximum 15 members required per team.
					</li>
					<li>
					15 overs for each side.
					</li>
					<li>
					Fielding restrictions: 5 overs (Power-Play) per side for 15 overs match.
					</li>
					<li>
					80 Minutes per inning for 15 overs match with 10 minutes break between the two innings.
					</li>
					<li>
					The squad of playing eleven must be named before the toss for every game.
					</li>
					<li>
					In case of a tie, there will be a Super over under the ICC rules.
					</li>
					<li>
					DRESS CODE: Strictly Cricket Whites with Sports Shoes (NO METAL SPIKES).
					</li>
					<li>
					Rest of the rules will be as per T20 ICC Cricket rules with neutral umpires.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

volleyball.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
					Team consists of six players.
					</li>
					<li>
					Maximum of six substitutes allowed.
					</li>
					<li>
					All matches are knock-out matches.
					</li>
					<li>
					International rules for substitutions will be followed.
					</li>
					<li>
					Three sets of 25, 25, 25 points respectively will be played for every matches.
					</li>
					<li>
					Final match will be of five sets 25, 25, 25, 25, 15 points respectively.
					</li>
					<li>
					Rotation is Allowed for Boys and Not for Girls.
					</li>
					<li>
					Maximum two time outs per team per sets are allowed. Total five time outs per match.
					</li>
					<h5 align="left">
					General rules for faults are:
					</h5>
					<ul>
						<li>
						Catching and throwing the ball.
						</li>
						<li>
						Two consecutive contacts with the ball made by the same player.
						</li>
						<li>
						Four consecutive contacts with the ball made by the same team.
						</li>
						<li>
						Touching the net during play.
						</li>
						<li>
						If the foot crosses over the service line while serving.
						</li>
					</ul>
					<li>
					The ball is “in” when it touches the floor of the playing court including the boundary lines and the attacker’s team gets a point.
					</li>
					<li>
					Service may be done underhand or overhand.
					</li>
					<li>
					Standard size volleyball, ground and net height.
					</li>
					<li>
					International volleyball rules would be followed, however decisions of the referee shall be considered final.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

basketball.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
					All matches are league matches.
					</li>
					<li>
					Quarter Timing will be decided by the referee.
					</li>
					<li>
					The tournament shall be conducted according to the rules of the Basketball Federation of India, unless, otherwise, modified in these rules.
					</li>
					<li>
					Only rubber basketballs shall be used in the competition.
					</li>
					<li>
					IF there is a tie between two or more than two teams in the matches played on league basis, the following procedure shall be adopted to decide the tie:
					</li>
					<li>
					Dual Tie : The team, which has beaten the other team in the league matches, shall be the winner.
					</li>
					<li>
					Tie between more than two teams : The tie between more than two teams shall be decided on the basis of Points Scored divided by Points Against.
					</li>
					<li>
					The team securing the greater quotient shall be the winner and so on. While deciding the tie between three or more than three teams, only the points secured for and against in the matches played between the teams in tie shall be counted.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

tableTennis.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
					In men’s team events there will be a maximum of 16 teams entered.
					</li>
					<li>
					A team consists of three players minimum and maximum of five players.
					</li>
					<li>
					Each team match consists of five individual matches and shall end when one team has won a majority of the possible individual matches. Each individual match shall be the best of five games.
					</li>
					<li>
					For each team match, the captain shall nominate the players who will play the first two singles matches. The third player will play in the doubles match (match number 3) with either of the two players who played the first two matches, selected by the captain after the second singles match is completed. The remaining matches (if necessary) will be set in a way to ensure that each player plays a maximum of two matches according to the following system:
					</li>
					<table>
					<tbody>
					<tr>
					<td style="width: 10px;">Order</td>
					<td style="width: 43px;">Type</td>
					<td style="width: 224px;">ABC Team</td>
					<td style="width: 218px;">XYZ Team</td>
					</tr>
					<tr>
					<td style="width: 10px;">1</td>
					<td style="width: 43px; text-align: center;">Singles</td>
					<td style="width: 224px; text-align: center;">&nbsp;A</td>
					<td style="width: 218px; text-align: center;">&nbsp;X</td>
					</tr>
					<tr>
					<td style="width: 10px;">2</td>
					<td style="width: 43px; text-align: center;">Singles</td>
					<td style="width: 224px; text-align: center;">&nbsp;B</td>
					<td style="width: 218px; text-align: center;">&nbsp;Y</td>
					</tr>
					<tr>
					<td style="width: 10px;" colspan="4">&nbsp;</td>
					</tr>
					<tr>
					<td style="width: 10px;">3</td>
					<td style="width: 43px; text-align: center;">Doubles</td>
					<td style="width: 224px; text-align: center;">C+AorB</td>
					<td style="width: 218px; text-align: center;">Z+XorY</td>
					</tr>
					<tr>
					<td style="width: 10px;" colspan="4">&nbsp;</td>
					</tr>
					<tr>
					<td style="width: 10px;">1</td>
					<td style="width: 43px; text-align: center;">Singles</td>
					<td style="width: 224px; text-align: center;">AorB (non-playing Doubles)</td>
					<td style="width: 218px; text-align: center;">Z</td>
					</tr>
					<tr>
					<td style="width: 10px;">2</td>
					<td style="width: 43px; text-align: center;">Singles</td>
					<td style="width: 224px; text-align: center;">C</td>
					<td style="width: 218px; text-align: center;">X or Y(non playing Doubles)</td>
					</tr>
					</tbody>
					</table>
					
					<li>
					Before the start of the match, the team that won the toss shall choose to be either the ABC team or the XYZ team.
					</li>
					<li>
					After choosing ABC or XYZ team, the captain shall nominate players in position A, B, C or X, Y, Z.
					</li>
					<li>
					After the captain hands over the nomination sheet for doubles (once the 2 first singles matches have been played), the match order of the 4th and 5th matches is automatically decided.
					</li>
					<li>
					There shall be a 5-minute break prior to and following the doubles match.
					</li>
					<li>
					The team competition will follow a knockout (single elimination) format.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

badminton.addEventListener("click", () => {
	section.classList.add("active");
	box.innerHTML = `<h2>Football</h2>
				<h4 class="rulesNregulations">Rule and regulations</h4>
				<h5 class="rulesNregulations">
					All the participants must carry their college ID cards and AADHAR
					CARD/ Voter Id/Driving license with photographs.
				</h5>
				<h5 class="rulesNregulations">
					Decision of the sports official will be considered final and binding
					for all the events.
				</h5>
				<ul>
					<li>
					Minimum 5 players required per team(boys).
					</li>
					<li>
					Minimum 3 players required per team(girls).
					</li>
					<li>
					3 singles match and 2 doubles match in the following order for boys (singles, singles, doubles, singles, doubles)
					</li>
					<li>
					2 singles match and 1 doubles match in the following order for girls (singles, doubles, singles).
					</li>
					<li>
					The umpire decision is the final decision in case of any dispute.
					</li>
					<li>
					The event will be played following International Badminton Rules.
					</li>
					<li>
					It will be in knock-out format with each decided on best of 5 matches for boys and 3 matches for girls.
					</li>
					<li>
					One player can play maximum of 2 matches (1 singles & 1 doubles)
					</li>
					<li>
					Each match will be best of three sets, each set being a race of 15 points or 21 points(decided by Umpires).
					</li>
					<li>
					All according to rules and regulations of BAI.
					</li>
					<li>
					Chief Referee decision is final.
					</li>
				</ul>
				<p>For further information/inquiry regarding football</p>
				<p>Contact:</p>
				<div>
					<p>1. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>2. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
					<p>3. <span>xxxxxxxx</span> - xxxxxxxxxxxx</p>
				</div>`;
	scroller.scrollTop = 0;
});

closeBtn.addEventListener("click", () => {
	section.classList.remove("active");
});
overlay.addEventListener("click", () => {
	section.classList.remove("active");
});

ScrollReveal().reveal(".sportsContent", {
	duration: 800,
	origin: "bottom",
	distance: "100px",
	opacity: 0,
	delay: 1000,
});

ScrollReveal().reveal(".boxEmpty1", {
	origin: "left",
	duration: 1000,
	distance: "1000px",
	delay: 100,
});

ScrollReveal().reveal(".boxEmpty2", {
	origin: "left",
	duration: 500,
	distance: "1000px",
	delay: 100,
});

ScrollReveal().reveal(".boxFull", {
	origin: "right",
	duration: 500,
	distance: "1000px",
	delay: 100,
});

// ScrollReveal().reveal(".menu", {
// 	origin: "right",
// 	duration: 500,
// 	distance: "1000px",
// 	delay: 800,
// });

ScrollReveal().reveal(".sportsSectionBg", {
	origin: "left",
	duration: 500,
	distance: "1000px",
	delay: 500,
});

ScrollReveal().reveal(".sportsHeading", {
	origin: "left",
	scale: 50,
	duration: 500,
	distance: "800px",
	delay: 800,
});
