# Syllabi - Easy Syllabus Viewing!
<p>One-stop-shop for all syllabus information. This app is basically an organized version of the original class syllabus for Barry Cumbie's CIS 376</p>
<p>Made by <a href="https://github.com/over-anna" target="_blank">Anna Patillo</a> using BootStrap styling</p>

# USER STORY
<ul>
        <li>As a student</li>
        <li>I want to search class information</li>
        <li>So that I can easily find what I need.</li>
</ul>

# NARRATIVE
<p>Syllabi transformed the original syllabus into a searchable grid of organized information. This makes it easier to find exactly what you're looking for!</p>
<p>I chose this specific app because finding syllabus information is always a difficult task. I have to search through one massive list of meaningless information, and it ends up just looking like a block of text to me.</p>
<p>To fix this problem, I organized all the information into sections. Each section holds related information on different pages, nicely placed into their own blocks.</p>
<p>Overall, this action has made the syllabus look much easier to navigate.</p>

# ATTRIBUTION
<p>This is a front end app fetching internal data, and uses Bootstrap styling, js code functions, and basic html.</p>
<p>Uses icon for GitHub.</p>
<p>All images were made by me, using a stock photo as a base.</p>
<p>Tested on Desktop & Mobile.</p>

# PROJECT STRUCTURE
``` tree -L 2
pages/
assets/data
assets/images
scripts/
styles/
index.html
README.md
```

# CODE SNIPPET
```
<div class="col-md-5">
        <div class="row g-4">
          <div class="col-12">
            <div class="card shadow-sm">
              <div class="card-body">
                <h5 class="card-title">Course Evaluation Process</h5>
                <ul>
                  <li><strong>40% dev projects.</strong>
                    <br>four development projects
                  </li>
                  <li><strong>20% exams.</strong><br>two in-class examinations, mid-term (10%) & final (10%)</li>
                  <li><strong>20% participation.</strong> <br>attendance, class activities, labs, study quizzes, pop
                    quizzes
                  </li>
                  <li><strong>20% homework.</strong> <br>CodeAcademy courses</li>
                </ul>
              </div>
            </div>
          </div>
```
<p>This code snippet shows one of the content cards used. The internal styling determines how the card looks, as well as it's placement on the page. For some cards, I utilized columns so that they wouldn't all be in one row.</p>
<p>Row classes are beneficial in making sure every card moves to the same line based on the zoom of the page, and column classes move affected blocks beneath the previous block instead.</p>

# LINKS & VALIDATION
<p>REPO : <a href="https://github.com/over-anna/simpler-syllabus">CLICK ME<a></p>
<p>APP : <a href="https://over-anna.github.io/simpler-syllabus/">CLICK ME<a></p>
<p>NU : <a href="https://validator.nu/?doc=https%3A%2F%2Fover-anna.github.io%2Fsimpler-syllabus%2F">CLICK ME<a></p>
<p>WAVE : <a href="https://wave.webaim.org/report#/https://over-anna.github.io/simpler-syllabus/">CLICK ME<a></p>
