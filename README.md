# Pre-work - Simon Says

Simon Says is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Dylan Celli

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/modern-thirsty-ocarina

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
!https://giphy.com/gifs/WQGz6Hf6OdH7XelBZ3/fullscreen


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Looked at module for Math.random for javascript.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
What challenged me when creating the submission was creating the random patterns for the user to follow. In my game I made the pattern random so that
everytime a game was won or lost the player would get a new pattern. What initially caused me problems was that I did not realize that the algorithm for
creating random numbers in a range was inclusive. The other challenge that I found in the project was that when creating the final method I found that
condensing the code, to make it more manageable and readable, took longer that I thought it would. I went through some trial and error when writing out the
code for the final method and it made the code longer than it needed to be so I had to take time to make the code more efficient. Finally, my greatest challenge
making the game work when the player did not refresh the page when planying a new game after completing a game. The progress counter needed to be reset at the end
of the game so that each new game started with a progress counter at zero.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
My first question about web development pertains to how it would work with in a team. Would certain members be assigned to specific languages and implementation?
For example, would there be one group of the team that works only in html or would the group work on a specific function and use all three languages to create the
function. Next, I would like to know if most projects are created from scratch or if website builders are what is normally used. Also are iterative solutions
used often or are solutions a mix of iterative and recursive.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours on the project I would try to implement other game modes and a selection menu. Other game modes could be flashing a single button each round
and having the player repeat the pattern up to the last button flash, or the player could be given the sequence and be expected to reverse it. In the menu there could be
options about how fast the button flashes in the standard mode and what pitch and volume the buttons play at. 



## License

    Copyright Dylan Celli

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.