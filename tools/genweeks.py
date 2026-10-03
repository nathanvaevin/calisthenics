#!/usr/bin/env python3
"""Generate the weekly sheets from the all-weeks homework doc.

The doc gives three bands (easier / base / harder). The app runs on the
skill tree's own 1-10 levels, so each band is expanded onto levels 3-6 and
topped up with the tree's own rung where three bands leave a gap.
Run from tools/:  python3 genweeks.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------------------------------------------------------------- shared ladders
def PULL(focus=False):
    why = ("The goal of the whole course, so it runs every week whatever else we are doing. "
           "Explode up on the first reps, fight the lowering slow on the last ones.")
    if focus:
        why = ("The focus this week, and the one thing to do at home. Do it in both sessions, "
               "first, while you are fresh. Explode up on the first reps, fight the lowering slow on the last ones.")
    return {"tag":"PULL","name":"The pull","why":why,"levels":{
      3:[["Dead hang","Build to 30 seconds","Just hang and breathe. Let the shoulders rise to the ears &mdash; this one is for the hands and the shoulders.","Hanging &amp; Grip|Passive dead hang"],
         ["Scapular pulls","3 sets of 5","Arms stay straight. Only the shoulder blades move, and you rise a few centimetres. This is the start of every pull-up.","Pull-Up|Scapular pull-up"]],
      4:[["Australian rows","3 sets of 8","Under a bar at chest height, body straight, chest touches the bar. Walk the feet forward to make it harder.","Row / Horizontal Pull|Horizontal row"],
         ["Negatives","4 singles, five seconds down","Chin starts over the bar, then resist all the way to straight arms.","Pull-Up|Assisted pull-up or negative"]],
      5:[["Band pull-ups","4 sets of 4","Yellow band under the foot or knee. Take the least help you can manage.","Pull-Up|Assisted pull-up or negative"],
         ["Two solo attempts","2 singles, fresh, at the start","No band. Dead hang start, chin over the bar. Before the banded work, not after.","Pull-Up|Full pull-up"]],
      6:[["Pull-up singles","5 sets of 1 to 2, two minutes rest","Never to failure. Explosive up, slow down.","Pull-Up|Full pull-up"]]}}

def PUSH(focus=False):
    why = "One push per session, after the pull. Stop two reps before failure."
    lv = {
      3:[["Scapular push-ups","3 sets of 8","High plank, elbows locked. Let the chest sink between the blades, then push the floor away.","Push-Up|Scapular push-up"],
         ["Incline push-ups","3 sets of 8","Hands on a table or windowsill. Pick a height where 8 is hard but clean.","Push-Up|Incline push-up"]],
      4:[["Incline push-ups","3 sets of 8","Lower the height a notch when 8 stops being hard.","Push-Up|Incline push-up"]],
      5:[["Full push-ups","3 sets of as many as stay clean","Stop two before failure. Chest a fist's height from the floor, elbows back not flared.","Push-Up|Full push-up"]],
      6:[["Diamond push-ups","3 sets of 5","Hands under the sternum, elbows brushing the ribs.","Push-Up|Diamond / close push-up"],
         ["Or: push-ups, three seconds down","3 sets of 5","Same movement, tempo is the load. Pick one of these two, not both.","Push-Up|Full push-up"]]}
    if focus:
        why = ("The focus this week. Two pushing sessions, and the second exercise is there to add "
               "volume without grinding the first one to failure.")
        lv[4] = [["Incline push-ups","3 sets of 8","Lower the height a notch when 8 stops being hard.","Push-Up|Incline push-up"],
                 ["Negative push-ups","3 sets of 3, three seconds down","From the top, lower as slowly as you can, then knees down to come back up.","Push-Up|Full push-up"]]
        lv[5] = [["Full push-ups","3 sets of as many as stay clean","Stop two before failure.","Push-Up|Full push-up"],
                 ["Negative push-ups","3 sets of 3, three seconds down","Straight after the full sets, when you are already tired.","Push-Up|Full push-up"]]
        lv[6] = [["Diamond push-ups","3 sets of 6","Hands under the sternum, elbows brushing the ribs.","Push-Up|Diamond / close push-up"],
                 ["Bar dips","3 sets of 5","The other half of pressing. Lower until the upper arms are level, then lock out.","Dip|Parallel bar dip"]]
    return {"tag":"PUSH","name":"One push" if not focus else "The push","why":why,"levels":lv}

def CORE(focus=False):
    why = "One hold to finish the session. This is what holds the body straight in everything else."
    lv = {
      3:[["Plank","3 sets of 30 seconds","Forearms down, one line from heel to head. End the set when the back sags, not when the clock says so.","Core &amp; Compression|Plank"]],
      4:[["Hollow-body hold","3 sets of 30 seconds","Lower back pressed flat, ribs down. Bend the knees if the back lifts.","Core &amp; Compression|Hollow-body hold"]],
      5:[["Hanging knee raises","3 sets of 8","No swinging. Curl the pelvis at the top and lower slowly.","Core &amp; Compression|Hanging knee raise"]],
      6:[["Hanging leg raises","3 sets of 6","Straight legs to horizontal, strict, no kip.","Core &amp; Compression|Hanging leg raise"]]}
    if focus:
        why = "The focus this week. Short, frequent and never sloppy — a shaky clean set beats a long ugly one."
        lv[3] = [["Plank","3 sets of 30 seconds","Forearms down, one line from heel to head.","Core &amp; Compression|Plank"],
                 ["Hollow-body hold","3 sets of 30 seconds","Lower back pressed flat. Bend the knees if the back lifts.","Core &amp; Compression|Hollow-body hold"]]
        lv[4] = [["Hollow-body hold","3 sets of 30 seconds","Lower back pressed flat, ribs down.","Core &amp; Compression|Hollow-body hold"],
                 ["Hollow rocks","2 sets of 10","Rock the whole shape like a rocking chair. If the rock comes from folding at the hips, reset.","Core &amp; Compression|Hollow rocks"]]
        lv[5] = [["Hanging knee raises","3 sets of 8","No swinging. Curl the pelvis at the top.","Core &amp; Compression|Hanging knee raise"],
                 ["Side plank","2 sets of 30 seconds per side","Elbow under the shoulder, hips lifted and stacked. The sides are everyone's weakest link.","Core &amp; Compression|Side plank"]]
        lv[6] = [["Hanging leg raises","3 sets of 6","Straight legs to horizontal, strict, no kip.","Core &amp; Compression|Hanging leg raise"],
                 ["Toes to bar","3 sets of 5","Pull the bar toward you with straight arms as the feet travel up.","Core &amp; Compression|Toes to bar"],
                 ["Or: dragon-flag negatives","3 sets of 3","Only once toes to bar is clean. Lower the whole rigid body as slowly as you can.","Core &amp; Compression|Dragon flag"]]
    return {"tag":"CORE","name":"One hold" if not focus else "The core","why":why,"levels":lv}

def LEGS(focus=False):
    why = "The half of the body calisthenics people quietly skip. Two exercises, no equipment."
    lv = {
      3:[["Bodyweight squats","3 sets of 15","To full depth, heels down. Elevate the heels 2 cm if they lift.","Squat &amp; Lunge|Bodyweight squat"]],
      4:[["Split squats","3 sets of 10 per side","Front shin vertical, torso tall, back knee to the floor.","Squat &amp; Lunge|Split squat"]],
      5:[["Bulgarian split squats","3 sets of 8 per side","Back foot on a chair, front knee over mid-foot, three seconds down.","Squat &amp; Lunge|Bulgarian split squat"]],
      6:[["Box pistols","3 sets of 5 per side","Sit to a chair on one leg and stand back up. Lower the seat as you get stronger.","Pistol Squat|Box pistol"]]}
    if focus:
        why = "The focus this week. Legs respond fast, so this is the week the whole body catches up."
        lv[3] = [["Bodyweight squats","3 sets of 15","To full depth, heels down.","Squat &amp; Lunge|Bodyweight squat"],
                 ["Glute bridges","3 sets of 15","Two second squeeze at the top, ribs down.","Hinge &amp; Hamstrings|Glute bridge"]]
        lv[4] = [["Split squats","3 sets of 10 per side","Slow and tall, back knee to the floor.","Squat &amp; Lunge|Split squat"],
                 ["Single-leg glute bridges","3 sets of 10 per side","Hips level throughout — the free hip must not drop.","Hinge &amp; Hamstrings|Single-leg glute bridge"]]
        lv[5] = [["Bulgarian split squats","3 sets of 8 per side","Back foot on a chair, three seconds down.","Squat &amp; Lunge|Bulgarian split squat"],
                 ["Box pistols","3 sets of 5 per side","Sit to a chair on one leg and stand back up.","Pistol Squat|Box pistol"]]
        lv[6] = [["Pistol squats","3 sets of 3 per side","Full depth, controlled, heel flat. Ankle range is the usual limiter, not strength.","Pistol Squat|Full pistol"],
                 ["Nordic curl negatives","3 sets of 5, four seconds down","Hips extended, lower forward as slowly as you can and push off the floor to return.","Hinge &amp; Hamstrings|Nordic curl negative"]]
    return {"tag":"LEGS","name":"Legs" if not focus else "The legs","why":why,"levels":lv}

HANDSTAND = {"tag":"BAL","name":"The handstand line","why":(
  "The focus this week. Balance is a skill, so it wants short and frequent practice, "
  "always fresh and always at the start of the session."),"levels":{
  3:[["Chest-to-wall walk-up","Hold 15 to 20 seconds","Feet on the wall, walk the hands in as far as is comfortable. Come down before the shoulders give out.","Handstand|Chest-to-wall handstand"],
     ["Down dog, active","3 sets of 30 seconds","Push the floor away, hips high, elbows locked, shoulder blades spreading. The same active shoulder you need upside down, at a friendly angle.","Kinetic Chain &amp; Prep|Down dog"],
     ["Wall chest opener","30 seconds each side","Forearm on a door frame, turn the chest slowly away. The shoulders have to open before the line has anywhere to go.","Kinetic Chain &amp; Prep|Wall chest opener"]],
  4:[["Chest-to-wall hold","3 sets of 30 seconds","Belly to the wall, arms locked, ribs down, shoulders pushing. Breathe the whole time.","Handstand|Chest-to-wall handstand"],
     ["Posterior pelvic tilt at the wall","3 sets of 20 seconds","Back to the wall, tuck the tailbone under and flatten the lower back into it. No tuck, no straight handstand.","Kinetic Chain &amp; Prep|Posterior pelvic tilt drill"],
     ["Hollow-to-arch transitions","3 sets of 8, slow","On the floor. Feel the strong line against the collapse &mdash; upside down you are always chasing one and fighting the other.","Kinetic Chain &amp; Prep|Hollow-to-arch (banana) transitions"]],
  5:[["Kick-up practice","10 attempts, no rush","Light kick, catch the balance, and practise stepping out of it. Learn the bail before the balance.","Handstand|Kick-up to balance"],
     ["Chest-to-wall hold","2 sets of 30 seconds","After the kick-ups, for the shape.","Handstand|Chest-to-wall handstand"],
     ["Pike scapular push-ups","3 sets of 8","Hips high, arms locked. Only the shoulder blades move: sink, then push tall and spread them.","Kinetic Chain &amp; Prep|Pike scapular push-up"]],
  6:[["Freestanding attempts","3 sets of 5 attempts","Fresh, at the start. A controlled kick-up with active shoulders is the success, whatever the hold time.","Handstand|Freestanding handstand"],
     ["Chest-to-wall shrugs","3 sets of 8","Push the floor away and shrug tall. Never sink into the neck.","Kinetic Chain &amp; Prep|Active-shoulder wall shrug"],
     ["Finish: the whole line","Build toward 60 seconds","Chest to wall with everything at once &mdash; wrists loaded, shoulders pushing, ribs down, pelvis tucked, legs squeezed.","Kinetic Chain &amp; Prep|Full integration: chest-to-wall line"]]}}

def DAILY(tag, name, why, items):
    return {"tag":tag,"name":name,"why":why,"levels":{l:items for l in (3,4,5,6)}}

WRIST_DAILY = DAILY("DAILY","Every day this week",
  "Two minutes, whenever. Both are easy and safe, and they build the exact shoulder a handstand needs.",
  [["Wrist prep","20 seconds each way","Circles both ways, palm-down and palm-up rocks, prayer and reverse prayer. Always before anything on the hands.","Kinetic Chain &amp; Prep|Wrist prep sequence"],
   ["Prone shoulder raises","2 sets of 10","Face down, arms overhead in a Y, thumbs up. Lift with the elbows locked. No wrists needed.","Kinetic Chain &amp; Prep|Prone shoulder raise"]])

ANKLE_DAILY = DAILY("DAILY","Every day this week",
  "For anyone whose heels lift in a squat. It is nearly always ankle range, not weak legs.",
  [["Ankle mobility drill","10 slow per side","Half-kneeling, front foot flat, drive the knee forward over the toes without letting the heel lift.","Squat &amp; Lunge|Ankle mobility drill"]])

SKILL = {"tag":"PLAY","name":"Movement and swing","why":(
  "Light and for feel, not for a score. This is the week before the retest, so the point is to "
  "move well and arrive fresh."),"levels":{
  3:[["Active hang","3 sets of 20 seconds","Shoulders pulled down away from the ears, arms straight.","Hanging &amp; Grip|Active hang"],
     ["Hollow and arch shapes","3 sets of 8, slow","On the floor. Feel the strong line and the collapse, and swap between them under control.","Kinetic Chain &amp; Prep|Hollow-to-arch (banana) transitions"]],
  4:[["Tuck swings","8 controlled swings","Hollow at the front, arch at the back, switching under the bar. Arms stay straight.","Swinging &amp; Bar Basics|Tap swing (active swing)"],
     ["Australian rows","2 easy sets of 8","Easy sets only. Nothing near failure this week.","Row / Horizontal Pull|Horizontal row"]],
  5:[["Tuck swings","8 controlled swings","Timing, not effort. The swing should feel light.","Swinging &amp; Bar Basics|Tap swing (active swing)"],
     ["Explosive pull-ups","3 fast singles, stop fresh","Three fast reps and walk away. Do not chase a number the week before a retest.","Pull-Up|Full pull-up"]],
  6:[["Explosive high pulls","3 fast singles","Pull as fast as you can, aiming to bring the bar to the ribs. Stop while it still feels fast.","Muscle-Up|Explosive high pull"],
     ["Straight-bar dips","3 sets of 5","Chest leaning slightly over the bar to stay balanced.","Muscle-Up|Straight-bar dip"],
     ["Ice cream makers","3 to 5, slow","From an inverted hang, roll out toward a front lever and back. Start tucked.","Bar Tricks &amp; Freestyle|Ice cream maker"]]}}

# ---------------------------------------------------------------- the weeks
BOX_SESSIONS = ("Two short sessions","Fifteen to twenty minutes each. Any two days with a day between them.",
                "Warm up for three minutes first: wrists, shoulders, hips, twenty squats, one hang.")
BOX_DAILY_HANG = ("Every day","Hang from something. A bar, a door frame, a beam &mdash; ten to thirty seconds, once or twice.",
                  "It costs nothing, and this one habit is worth more than the rest put together.")

WEEKS = {
2: dict(title="the pull-up", h1="Your <span>Practice</span>",
    eyebrow="Week 2 homework &middot; the pull-up",
    lede="This week was all about the pull. The single most important thing you can do at home is train the pull, because a pull-up is built by pulling, and one class a week is not enough on its own.",
    rule=("The golden rule from class","Explode up on the first reps, fight the lowering slow on the last ones."),
    secnote="Two sessions of fifteen to twenty minutes beats one long one. Even one honest session this week is a real week of training.",
    boxes=[BOX_SESSIONS, ("Each session","One pull &middot; one push &middot; one hold &middot; one legs.","The pull comes first, while you are fresh. Do it in both sessions."), BOX_DAILY_HANG],
    blocks=[PULL(focus=True), PUSH(), CORE(), LEGS()],
    # First card rebuilt against the design system. Add names here as the
    # page migrates; when every row is listed, make it the default instead.
    systemRows=["Dead hang"]),

3: dict(title="handstands", h1="Your <span>Practice</span>",
    eyebrow="Week 3 homework &middot; handstands",
    lede="Upside down this week. The handstand is one line &mdash; wrist to shoulder to ribs to hips &mdash; and this week builds it. The pull keeps running underneath, because it always does.",
    rule=("The one to remember","Push the floor away. A handstand is an overhead press you hold instead of finish."),
    secnote="Balance work wants frequency, not duration. Ten focused minutes beats one long session where the wrists give out early.",
    boxes=[BOX_SESSIONS, ("Each session","The handstand block in full &middot; then one pull &middot; one push &middot; one hold.","Short on time? The handstand block is the one that matters this week. Never start upside down cold."), BOX_DAILY_HANG],
    blocks=[HANDSTAND, PULL(), PUSH(), CORE(), WRIST_DAILY]),

4: dict(title="push-ups", h1="Your <span>Practice</span>",
    eyebrow="Week 4 homework &middot; push-ups",
    lede="Pressing week. Two push sessions, built so the second exercise adds volume without grinding the first one into the ground. The pull stays in to keep the goal alive.",
    rule=("The one to remember","Elbows back, not flared. The body travels as one plank, from heel to head."),
    secnote="Stop two reps before failure, every set. You are here twice this week, not once.",
    boxes=[BOX_SESSIONS, ("Each session","Push first &middot; one pull &middot; one legs &middot; one hold.","Two pushing exercises at every level, the second one lighter than the first."), BOX_DAILY_HANG],
    blocks=[PUSH(focus=True), PULL(), LEGS(), CORE()]),

5: dict(title="legs", h1="Your <span>Practice</span>",
    eyebrow="Week 5 homework &middot; legs",
    lede="Legs week, the half of the body calisthenics quietly skips. Everything here is bodyweight and needs nothing but a chair. The pull keeps running underneath.",
    rule=("The one to remember","Full depth, heels down. Depth beats reps every time."),
    secnote="Legs recover fast and respond fast. Two honest sessions this week will show up in your squat by the next class.",
    boxes=[BOX_SESSIONS, ("Each session","Legs first &middot; one pull &middot; one push &middot; one hold.","Two leg exercises at every level: one squat pattern, one hinge."), BOX_DAILY_HANG],
    blocks=[LEGS(focus=True), PULL(), PUSH(), CORE(), ANKLE_DAILY]),

6: dict(title="core", h1="Your <span>Practice</span>",
    eyebrow="Week 6 homework &middot; core",
    lede="Core week. Not sit-ups &mdash; the shapes that hold every other position together. This is the week the hollow body finally makes sense, because it is under your pull-up and your handstand too.",
    rule=("The one to remember","A shaky clean thirty seconds beats a long sloppy minute. When the shape breaks, the set is over."),
    secnote="Short, frequent and never sloppy. One hollow hold a day, even for a minute, is worth more than one long session.",
    boxes=[BOX_SESSIONS, ("Each session","Core first &middot; one pull &middot; one push &middot; one legs.","Two core exercises at every level: one hold, one that moves."), ("Every day","One hollow hold, even for a minute, plus the daily hang.","It is the shape under your pull-up and your handstand too.")],
    blocks=[CORE(focus=True), PULL(), PUSH(), LEGS()]),

7: dict(title="skill day", h1="Your <span>Practice</span>",
    eyebrow="Week 7 homework &middot; skill day",
    lede="Light week. The retest is next, so this one is movement and fun rather than a grind. Rest the hard pulling so the retest is honest.",
    rule=("The one to remember","Rest, sleep and food matter more than an extra session this week. Arrive fresh."),
    secnote="Nothing to failure. Keep the daily hang, do the shapes for fun, and turn up next week rested.",
    boxes=[("One or two easy sessions","Fifteen minutes is plenty. Skip one entirely if you feel beaten up.","No warm-up shortcuts though — light sessions still need warm wrists and shoulders."),
           ("Each session","Movement and swing &middot; one easy push &middot; one easy hold.","Stop every set while it still feels fast and clean."), BOX_DAILY_HANG],
    blocks=[SKILL, PUSH(), CORE()]),
}

# ---------------------------------------------------------------- emit
def esc(x): return x

def rows(items):
    out=[]
    for name,dose,note,key in items:
        k = '"%s"' % key if key else "null"
        out.append('        ["%s","%s","%s",%s]' % (name,dose,note,k))
    return ",\n".join(out)

def block_js(b):
    lv=[]
    for l in (3,4,5,6):
        lv.append("     %d:[\n%s]" % (l, rows(b["levels"][l])))
    return ('  {tag:"%s", name:"%s", why:"%s",\n   levels:{\n%s\n   }}'
            % (b["tag"], b["name"], b["why"], ",\n".join(lv)))

TPL = '''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Practice &middot; Week {n}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?{fonts}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/styles.css">{sheets}
</head>

<body>
<div class="wrap">
  <nav class="crumbs">
    <a href="../index.html">&larr; All training</a>
    <a href="index.html">Choose week</a>
    <span class="here">Week {n}</span>
  </nav>
  <p class="eyebrow">{eyebrow}</p>
  <h1>{h1}</h1>
  <p class="lede">{lede}</p>

  <div class="picker">
    <h3>Pick your level</h3>
    <div class="lvls" id="lvls"></div>
    <p id="pickernote">Pick the level that matches where you are, block by block &mdash; you might be a 4 on pull and a 6 on legs. If in doubt, take the easier one and do it properly.</p>
  </div>

  <div class="rule">
    <h3>{rule_h}</h3>
    <p>{rule_p}</p>
  </div>

  <h2 class="sec">Getting the best out of it</h2>
  <p class="secnote">{secnote}</p>

  <div class="plan">
{boxes}
  </div>

  <div id="blocks"></div>

  <footer>The number on each exercise is where it sits in the skill tree. Tap any exercise to see how it is done and which muscles it works. If something here is confusing, ask me before you guess.</footer>
</div>

<script src="../assets/engine.js"></script>
<script src="../assets/week.js"></script>
<script>

/* ---------------------------------------------------------------
   WEEK {n} — {title}.
   From the all-weeks homework sheet. Its easier / base / harder bands
   are expanded onto the skill tree's own levels, which lead.
   --------------------------------------------------------------- */
const BLOCKS = [
{blocks}
];

renderWeek(BLOCKS, {{levels:[3,4,5,6]{render_opts}}});
</script>
</body>
</html>
'''

# Legacy pages keep the old faces. A page that opts into the design system
# also loads Archivo, Archivo Black and Space Mono, plus tokens.css AFTER
# styles.css so --bg resolves to the near black base, and components.css.
FONTS_LEGACY = "family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@400;500;600"
FONTS_SYSTEM = ("family=Archivo:wght@400;600&family=Archivo+Black"
                "&family=Barlow+Condensed:wght@500;600;700"
                "&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700")
SHEETS_SYSTEM = ('\n<link rel="stylesheet" href="../tokens.css">'
                 '\n<link rel="stylesheet" href="../assets/components.css">')

for n, w in WEEKS.items():
    boxes = "\n".join(
      '    <div class="box">\n      <h3>%s</h3>\n      <p>%s</p>\n      <p class="sub">%s</p>\n    </div>' % b
      for b in w["boxes"])
    srows = w.get("systemRows")
    html = TPL.format(n=n, title=w["title"], eyebrow=w["eyebrow"], h1=w["h1"], lede=w["lede"],
                      rule_h=w["rule"][0], rule_p=w["rule"][1], secnote=w["secnote"],
                      boxes=boxes, blocks=",\n".join(block_js(b) for b in w["blocks"]),
                      fonts=FONTS_SYSTEM if srows else FONTS_LEGACY,
                      sheets=SHEETS_SYSTEM if srows else "",
                      render_opts=(", systemRows:%s" % ('["' + '","'.join(srows) + '"]')) if srows else "")
    path = os.path.join(ROOT, "weeks", "week-%d.html" % n)
    open(path, "w").write(html)
    print("wrote weeks/week-%d.html  (%d blocks)" % (n, len(w["blocks"])))
