/* ============================================================
   ENGINE  —  shared by every weekly practice page.
   Contains: the exercise library (TRACKS), the how-to steps,
   the muscle map, the 2D animations and the 3D rig.
   Do not edit per week. Only the week pages change.
   ============================================================ */
const TRACKS = [
/* ===================== 1. FOUNDATIONS ===================== */
{
  group:"Foundations", name:"Push-Up", cat:"PUSH", tag:"Horizontal pressing — the base for dips, handstand push-ups and eventually planche",
  ladder:[
    {name:"Incline push-up", target:"Hands on a bar or bench — <b>15</b> clean reps", level:"foundation",
     primary:["Pectoralis major","Anterior deltoid","Triceps"], secondary:["Serratus anterior","Core"],
     cues:["The higher the hands, the easier it is — lower the bar a notch each week instead of dropping to knees.","Squeeze glutes and ribs down so the body travels as one plank."],
     faults:["Hips leading the way up","Head dropping before the chest does"]},
    {name:"Full push-up", target:"Chest to the floor — <b>10–12</b> reps", level:"foundation",
     primary:["Pectoralis major","Anterior deltoid","Triceps"], secondary:["Serratus anterior","Rectus abdominis","Glutes"],
     cues:["Hands just outside shoulders, elbows tracking back at roughly 45°, not out to the sides.","Push the floor away at the top and let the shoulder blades spread — that protraction is what feeds planche later."],
     faults:["Sagging lower back","Only going halfway down","Elbows flaring to 90°"]},
    {name:"Diamond / close push-up", target:"Hands together under the sternum — <b>8–10</b>", level:"intermediate",
     primary:["Triceps"], secondary:["Pectoralis major (inner)","Anterior deltoid"],
     cues:["Keep elbows brushing the ribs — this is a triceps builder, not a chest one.","If wrists complain, use parallettes or a fist position."],
     faults:["Elbows flaring, which turns it back into a normal push-up"]},
    {name:"Archer push-up", target:"<b>5–6</b> per side, opposite arm nearly straight", level:"intermediate",
     primary:["Pectoralis major","Triceps"], secondary:["Obliques","Serratus anterior"],
     cues:["Wide hands, shift the chest over the working hand, straight arm just balances.","Slow the lowering phase — that side loading is your bridge to a one-arm push-up."],
     faults:["Twisting the hips to cheat load off the working arm"]},
    {name:"Pseudo-planche push-up", target:"Hands at the hips, shoulders past the wrists — <b>8</b>", level:"advanced",
     primary:["Anterior deltoid","Pectoralis major (upper)","Biceps (long head, straight-arm load)"], secondary:["Serratus anterior","Core","Wrist flexors"],
     cues:["Turn the hands out or use parallettes if the wrists complain.","Lean forward as you descend and keep leaning — the lean is the exercise, not the depth."],
     faults:["Losing the lean at the bottom","Hips piking up to reduce load"]},
    {name:"One-arm push-up", target:"Feet no wider than shoulders, chest to floor", level:"elite",
     primary:["Pectoralis major","Triceps","Anterior deltoid"], secondary:["Obliques","Quadratus lumborum","Glutes"],
     cues:["Narrow the feet gradually over weeks — foot width is the real difficulty dial.","Brace hard against the rotation; the free side should not drop."],
     faults:["Body rotating open to a side-plank position"]}
  ],
  advanced:["One-arm push-up","Planche push-up","Handstand push-up","Explosive / clap push-up","Ring push-up (RTO)"],
  support:["Scapular push-ups","Plank and hollow-body holds","Serratus protractions","Band-resisted push-ups","Wrist prep sequence"]
},
{
  group:"Foundations", name:"Pull-Up", cat:"PULL", tag:"Vertical pulling — the single most useful strength marker in the whole sport",
  ladder:[
    {name:"Scapular pull-up", target:"<b>8–10</b> — arms straight, shoulders pull down from the ears", level:"foundation",
     primary:["Lower trapezius","Rhomboids","Latissimus dorsi (lower fibres)"], secondary:["Forearm flexors"],
     cues:["Arms stay locked. Only the shoulder blades move; the head rises 5–10 cm, no more.","This teaches the start of every pull — if someone cannot do this, they cannot control a pull-up."],
     faults:["Bending the elbows and turning it into a tiny pull-up","Shrugging up instead of pulling down"]},
    {name:"Assisted pull-up or negative", target:"Band, foot on box, or <b>5 × 5s</b> lowering", level:"foundation",
     primary:["Latissimus dorsi","Biceps brachii","Brachialis"], secondary:["Rhomboids","Mid trapezius","Core"],
     cues:["Negatives build the most strength fastest for beginners — jump to the top, then take five full seconds down.","Finish every negative with straight arms; skipping the bottom builds a gap you will pay for later."],
     faults:["Dropping through the last third","Shoulders left shrugged at the bottom"]},
    {name:"Full pull-up", target:"<b>5</b> strict — chin over bar, dead hang each rep", level:"intermediate",
     primary:["Latissimus dorsi","Biceps brachii","Brachialis","Brachioradialis"], secondary:["Lower trapezius","Rhomboids","Rectus abdominis"],
     cues:["Set the scapula first, then bend the elbows — think of driving elbows into your back pockets.","Keep a hollow body: ribs down, legs slightly in front, no swinging."],
     faults:["Kipping the hips to get over","Chin craning instead of chest rising"]},
    {name:"Chest-to-bar pull-up", target:"<b>8</b> with the chest touching the bar", level:"intermediate",
     primary:["Latissimus dorsi","Lower trapezius","Biceps brachii"], secondary:["Rear deltoid","Rhomboids","Core"],
     cues:["Lean back slightly and drive the chest up and through — this is the pull height a muscle-up needs.","Squeeze at the top for a beat before lowering."],
     faults:["Losing the hollow and arching to reach the bar"]},
    {name:"Weighted pull-up", target:"<b>+25%</b> bodyweight for <b>5</b>", level:"advanced",
     primary:["Latissimus dorsi","Biceps brachii"], secondary:["Lower trapezius","Rhomboids","Grip"],
     cues:["Belt or vest beats a dumbbell between the feet — it keeps the body line clean.","Rep quality first: if range shortens, the weight is too heavy."],
     faults:["Half reps under load","Elbow pain from adding weight too fast"]},
    {name:"Archer / assisted one-arm", target:"Load one side heavily — the doorway to the one-arm track", level:"elite",
     primary:["Latissimus dorsi","Biceps brachii"], secondary:["Obliques","Grip","Rotator cuff"],
     cues:["Pull towards one hand, other arm long and light on the bar.","See the One-Arm Pull-Up track for the full ladder from here."],
     faults:["Elbow of the straight arm bending to share the load"]}
  ],
  advanced:["Weighted pull-up","One-arm pull-up","Muscle-up","Front lever pull","Typewriter pull-up"],
  support:["Dead hangs and grip work","Scapular pulls","Band-assisted reps","Horizontal rows","Hollow-body holds"]
},
{
  group:"Foundations", name:"Row / Horizontal Pull", cat:"PULL", tag:"The back builder that nobody does enough of — and the honest fix for round shoulders",
  ladder:[
    {name:"High bar row", target:"Bar at hip height, body steep — <b>15</b> reps", level:"foundation",
     primary:["Latissimus dorsi","Rhomboids","Mid trapezius"], secondary:["Biceps brachii","Rear deltoid","Core"],
     cues:["The steeper you stand, the easier it is — walk the feet forward a few centimetres each week.","Touch the chest to the bar, not the belly."],
     faults:["Hips sagging","Pulling with the arms while the shoulder blades stay stuck"]},
    {name:"Horizontal row", target:"Body parallel to the floor, heels down — <b>12</b>", level:"foundation",
     primary:["Latissimus dorsi","Rhomboids","Mid trapezius"], secondary:["Biceps brachii","Rear deltoid","Glutes","Core"],
     cues:["Squeeze glutes so the body is a plank, then row.","Pause one second with the bar at the chest — this is where the mid-back learns to fire."],
     faults:["Bum dropping","Shrugging the shoulders toward the ears"]},
    {name:"Feet-elevated row", target:"Feet on a box, body level or head lower — <b>10</b>", level:"intermediate",
     primary:["Latissimus dorsi","Rhomboids","Mid trapezius"], secondary:["Rear deltoid","Biceps","Core"],
     cues:["Raising the feet loads more bodyweight into the pull — a clean way to progress without adding weight.","Keep the ribs down; the lower back should not arch."],
     faults:["Arching the back to reach the bar"]},
    {name:"Archer row", target:"<b>6</b> per side", level:"advanced",
     primary:["Latissimus dorsi","Biceps brachii"], secondary:["Obliques","Rear deltoid","Grip"],
     cues:["Wide grip, pull to one hand, other arm straight along the bar.","Feet elevated makes it a genuine one-arm row prep."],
     faults:["Rotating the torso to face the working side"]},
    {name:"One-arm row / front lever row", target:"One arm horizontal, or rows held in tuck front lever", level:"elite",
     primary:["Latissimus dorsi","Biceps brachii","Core (anti-rotation)"], secondary:["Rotator cuff","Grip"],
     cues:["Anti-rotation is most of the work — square the shoulders and hips throughout.","Front lever rows belong here once your tuck lever hold is solid."],
     faults:["Body twisting open with every rep"]}
  ],
  advanced:["Front lever row","One-arm row","Ring row with turnout","Wide row","Tempo rows"],
  support:["Band pull-aparts","Face pulls","Scapular retractions","Rear-delt work","Thoracic extension mobility"]
},
{
  group:"Foundations", name:"Dip", cat:"PUSH", tag:"Vertical pressing on the bars — the other half of the muscle-up",
  ladder:[
    {name:"Support hold", target:"Arms locked, shoulders down — hold <b>30s</b>", level:"foundation",
     primary:["Triceps","Anterior deltoid","Lower trapezius"], secondary:["Pectoralis major","Core","Serratus anterior"],
     cues:["Push the bars down and away, shoulders pulled away from the ears.","Legs together, ribs down — this is a vertical hollow body."],
     faults:["Sinking into the shoulders","Hips behind the hands"]},
    {name:"Bench or box dip", target:"<b>12</b> with feet on the floor", level:"foundation",
     primary:["Triceps"], secondary:["Anterior deltoid","Pectoralis major"],
     cues:["Keep the back close to the bench and elbows pointing back.","Straighter legs make it harder — a simple dial."],
     faults:["Elbows flaring wide, which stresses the shoulder"]},
    {name:"Negative dip", target:"<b>5 × 5s</b> lowering to 90°", level:"foundation",
     primary:["Triceps","Pectoralis major"], secondary:["Anterior deltoid","Rotator cuff"],
     cues:["Start from a solid support hold and resist all the way down.","Stop at shoulders level with elbows at first, then go deeper as it gets comfortable."],
     faults:["Free-falling through the bottom third, where shoulders get hurt"]},
    {name:"Parallel bar dip", target:"<b>8–10</b> full depth", level:"intermediate",
     primary:["Triceps","Pectoralis major (lower)"], secondary:["Anterior deltoid","Rhomboids","Core"],
     cues:["Slight forward lean loads the chest, upright loads the triceps — pick on purpose.","Lock out fully at the top and re-set the shoulders each rep."],
     faults:["Bouncing out of the bottom","Shoulders rolling forward at depth"]},
    {name:"Ring dip", target:"<b>6–8</b> with rings turned out at the top", level:"advanced",
     primary:["Triceps","Pectoralis major"], secondary:["Rotator cuff","Biceps (stabilising)","Serratus anterior"],
     cues:["Own a 30s ring support with turnout before you attempt reps.","Keep the rings pressed into the hips at lockout."],
     faults:["Rings drifting wide","Losing turnout the moment you lower"]},
    {name:"Weighted dip", target:"<b>+25%</b> bodyweight for <b>5</b>", level:"advanced",
     primary:["Triceps","Pectoralis major"], secondary:["Anterior deltoid","Core"],
     cues:["Great carry-over to the muscle-up lockout and the handstand push-up.","Add weight in small steps; shoulders and sternum need time to adapt."],
     faults:["Reducing depth as the load climbs"]}
  ],
  advanced:["Ring dip","Weighted dip","Bulgarian dip","Straight-bar dip","Impossible dip"],
  support:["Support holds","Ring support with turnout","Triceps extensions on bars","Shoulder external rotation work","Scapular depressions"]
},
{
  group:"Foundations", name:"Hanging &amp; Grip", cat:"HANG", tag:"Everything on a bar starts here — shoulders that hold, hands that do not quit",
  ladder:[
    {name:"Passive dead hang", target:"Relaxed hang — <b>30–60s</b>", level:"foundation",
     primary:["Forearm flexors","Grip"], secondary:["Latissimus dorsi (stretch)","Shoulder capsule"],
     cues:["Let the shoulders rise to the ears and simply breathe — this decompresses and builds hand endurance.","Use a thumb-over grip only if the hands slip; thumb-around is safer overhead."],
     faults:["Death-gripping the bar and burning out in 10 seconds"]},
    {name:"Active hang", target:"Shoulders pulled down and back — <b>20–30s</b>", level:"foundation",
     primary:["Lower trapezius","Latissimus dorsi","Rhomboids"], secondary:["Grip","Core"],
     cues:["Pull the shoulders away from the ears without bending the elbows.","Add a hollow body — legs slightly forward, ribs down — and it becomes a full-body position."],
     faults:["Bending the elbows","Ribs flaring so the back arches"]},
    {name:"Hanging with movement", target:"Side-to-side swings, single-arm hand release, <b>15s</b> holds", level:"intermediate",
     primary:["Grip","Latissimus dorsi"], secondary:["Rotator cuff","Obliques"],
     cues:["Release one hand for a second at a time to build tolerance for one-arm work.","Keep the shoulder of the hanging arm active — never dangle loose on one arm."],
     faults:["Letting the working shoulder go fully passive under one-arm load"]},
    {name:"Skin the cat", target:"Slow roll through to German hang and back — <b>3–5</b>", level:"intermediate",
     primary:["Latissimus dorsi","Rectus abdominis","Shoulder extensors"], secondary:["Biceps","Grip","Hip flexors"],
     cues:["Go slowly and only as far as your shoulders allow — stop the moment it pinches.","Keep arms straight but never locked hard; rings are kinder than a bar here."],
     faults:["Dropping quickly into the bottom position and shocking the shoulders"]},
    {name:"Towel or fingertip hang", target:"<b>20s</b> on a towel, or one-arm hang <b>10s</b> per side", level:"advanced",
     primary:["Forearm flexors","Grip","Finger flexors"], secondary:["Latissimus dorsi","Rotator cuff"],
     cues:["Grip is usually the first thing that fails on levers and one-arm work — train it directly.","Two short hangs at the end of each session is plenty."],
     faults:["Chasing maximum time every session and frying the elbows"]}
  ],
  advanced:["One-arm hang","Bar hangs with added weight","Skin the cat on rings","Ice cream makers","Windshield wipers"],
  support:["Wrist and forearm prep","Finger curls","Thick-bar or towel work","Shoulder mobility","Scapular pulls"]
},
{
  group:"Foundations", name:"Core &amp; Compression", cat:"CORE", tag:"The midsection that makes levers, planches and presses possible",
  ladder:[
    {name:"Hollow-body hold", target:"Lower back pressed flat — <b>30s</b>", level:"foundation",
     primary:["Rectus abdominis","Transverse abdominis"], secondary:["Hip flexors","Quadriceps"],
     cues:["Press the lower back into the floor first, then lower arms and legs only as far as you can hold it.","Bend the knees to make it easier — never let the back lift."],
     faults:["Arched lower back","Holding the breath"]},
    {name:"Hanging knee raise", target:"<b>10–12</b> controlled, knees above hips", level:"foundation",
     primary:["Rectus abdominis","Hip flexors (iliopsoas)"], secondary:["Obliques","Grip","Latissimus dorsi"],
     cues:["Curl the pelvis under at the top instead of just lifting the thighs.","Lower slowly and kill the swing before the next rep."],
     faults:["Swinging into each rep","Only lifting the legs, never tilting the pelvis"]},
    {name:"Hanging leg raise", target:"<b>8–10</b> with straight legs to horizontal", level:"intermediate",
     primary:["Rectus abdominis","Hip flexors"], secondary:["Obliques","Quadriceps","Grip"],
     cues:["Keep the shoulders active — this is a pulling exercise as much as an ab exercise.","Straight legs need hamstring length; keep a soft knee if you cannot reach parallel."],
     faults:["Bent knees creeping in","Using a swing at the bottom"]},
    {name:"Toes to bar", target:"<b>5–8</b> strict, no swing", level:"advanced",
     primary:["Rectus abdominis","Hip flexors","Latissimus dorsi"], secondary:["Obliques","Grip","Hamstrings (flexibility)"],
     cues:["Pull the bar towards you slightly as the feet come up — straight-arm lat work makes it possible.","Compression drills on the floor transfer directly here."],
     faults:["Kipping when the goal is strict","Hamstring tightness limiting the last 20°"]},
    {name:"Dragon flag", target:"Negatives first, then <b>5</b> full reps", level:"elite",
     primary:["Rectus abdominis","Obliques"], secondary:["Latissimus dorsi","Glutes","Hip flexors"],
     cues:["Whole body stays one rigid line pivoting on the shoulders — no folding at the hips.","Start with tuck and single-leg versions, then 5-second negatives."],
     faults:["Piking at the hips","Lower back arching as the legs come down"]}
  ],
  advanced:["Dragon flag","Windshield wipers","Ab wheel from standing","V-sit","Front lever variations"],
  support:["Hollow rocks","Dead bugs","Side plank","Seated pike compressions","Hamstring flexibility work"]
},

/* ===================== 2. LOWER BODY ===================== */
{
  group:"Lower body", name:"Squat &amp; Lunge", cat:"LEGS", tag:"Legs first: depth, control and single-leg strength before anything fancy",
  ladder:[
    {name:"Bodyweight squat", target:"<b>20</b> to full depth, heels down", level:"foundation",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Adductors","Erector spinae","Calves"],
     cues:["Sit between the heels, knees tracking over the toes — knees travelling forward is normal and fine.","If the heels lift, elevate them 2 cm and work ankle mobility separately."],
     faults:["Cutting depth","Knees collapsing inward","Heels rising"]},
    {name:"Split squat", target:"<b>12</b> per leg, back knee to the floor", level:"foundation",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Hamstrings","Adductors","Calves"],
     cues:["Front shin roughly vertical, torso tall.","Slow the lowering to three seconds and it becomes a serious strength exercise with no equipment."],
     faults:["Front heel lifting","Torso collapsing forward"]},
    {name:"Bulgarian split squat", target:"<b>10</b> per leg, rear foot elevated", level:"intermediate",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Adductors","Hamstrings","Core"],
     cues:["Set the front foot far enough forward that the front knee stays over mid-foot.","This is the highest-value leg exercise most calisthenics people skip."],
     faults:["Standing too close to the bench","Pushing off the back foot"]},
    {name:"Box pistol / assisted pistol", target:"<b>8</b> per leg to a low box", level:"intermediate",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Tibialis anterior","Hip flexors","Adductors"],
     cues:["Lower the box height gradually — this is the cleanest path to a pistol.","Hold a light plate out front as a counterbalance; it is a legitimate tool, not cheating."],
     faults:["Dropping onto the box instead of controlling down"]},
    {name:"Jump squat / explosive work", target:"<b>3 × 8</b> soft landings", level:"advanced",
     primary:["Quadriceps","Gluteus maximus","Calves"], secondary:["Hamstrings","Core"],
     cues:["Land quietly through the whole foot, absorb with the hips.","Quality over quantity — stop the set when the landings get loud."],
     faults:["Stiff-legged landings","Knees caving on landing"]}
  ],
  advanced:["Pistol squat","Shrimp squat","Jumping pistol","Sissy squat","Weighted squat variations"],
  support:["Ankle dorsiflexion drills","Calf raises","Hip mobility (90/90)","Wall sits","Single-leg balance"]
},
{
  group:"Lower body", name:"Hinge &amp; Hamstrings", cat:"LEGS", tag:"The back of the legs — knee health, jumping power, and the missing half of most programmes",
  ladder:[
    {name:"Glute bridge", target:"<b>15</b> with a two-second squeeze at the top", level:"foundation",
     primary:["Gluteus maximus"], secondary:["Hamstrings","Erector spinae"],
     cues:["Drive through the heels and tuck the pelvis slightly at the top.","Ribs stay down — the lift comes from the hips, not from arching the back."],
     faults:["Hyperextending the lower back at the top"]},
    {name:"Single-leg glute bridge", target:"<b>12</b> per side", level:"foundation",
     primary:["Gluteus maximus","Hamstrings"], secondary:["Gluteus medius","Core (anti-rotation)"],
     cues:["Keep the hips level — the free hip should not drop.","Foot further from the body shifts work to the hamstrings."],
     faults:["Hips tilting","Pushing off the non-working leg"]},
    {name:"Nordic curl negative", target:"<b>5 × 4s</b> lowering with assistance", level:"intermediate",
     primary:["Hamstrings"], secondary:["Gluteus maximus","Erector spinae","Calves"],
     cues:["Hips stay extended in a straight line from knee to shoulder — no folding.","Push off the floor to return; the negative is the training effect."],
     faults:["Piking at the hips","Falling instead of lowering"]},
    {name:"Slider or ring leg curl", target:"<b>10</b> with hips lifted", level:"intermediate",
     primary:["Hamstrings"], secondary:["Gluteus maximus","Core"],
     cues:["Keep the hips high the whole set — if they drop, the hamstrings stop working.","Single-leg version is the progression, not more reps."],
     faults:["Hips sinking as fatigue arrives"]},
    {name:"Full Nordic curl", target:"<b>3–5</b> controlled all the way down and back", level:"elite",
     primary:["Hamstrings"], secondary:["Gluteus maximus","Erector spinae"],
     cues:["One of the strongest knee-injury preventers there is — worth the months it takes.","Pad the knees; the shins need a partner or a fixed anchor."],
     faults:["Rushing the concentric with a hip snap"]}
  ],
  advanced:["Full Nordic curl","Single-leg Romanian deadlift with load","Hamstring bridge holds","Jumping variations"],
  support:["Hamstring flexibility","Calf raises","Glute activation drills","Hip hinge patterning"]
},
{
  group:"Lower body", name:"Pistol Squat", cat:"LEGS", tag:"Single-leg squat to full depth — strength, balance and mobility in one movement",
  ladder:[
    {name:"Assisted pistol", target:"Hold a support or counterbalance a plate", level:"foundation",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Adductors","Tibialis anterior","Core"],
     cues:["Use as little assistance as you can get away with, and note it — that is your progress marker.","Extended arms and a light plate out front make balance possible immediately."],
     faults:["Pulling up with the support arm rather than pushing with the leg"]},
    {name:"Box pistol", target:"Sit to a box and stand up on one leg", level:"foundation",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Hamstrings","Calves"],
     cues:["Lower the box a few centimetres every couple of weeks.","Touch and go, do not rest on the box."],
     faults:["Dropping onto the box","Free leg touching down"]},
    {name:"Full pistol", target:"Full depth, controlled, no support", level:"intermediate",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Adductors","Tibialis anterior","Hip flexors","Core"],
     cues:["Ankle mobility is the usual limiter, not strength — test it before assuming weakness.","Free leg held straight requires hip-flexor endurance; train it separately with L-sit work."],
     faults:["Heel lifting","Rounding forward and losing balance backward"]},
    {name:"Weighted or elevated pistol", target:"Add load, or drop the heel below the step", level:"advanced",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Adductors","Core"],
     cues:["Elevated (deficit) pistols demand more ankle range; weighted ones demand more strength. Pick your gap.","A kettlebell held at the chest also helps balance."],
     faults:["Depth shrinking as load increases"]},
    {name:"Shrimp squat", target:"Rear foot held behind, knee to floor", level:"advanced",
     primary:["Quadriceps","Gluteus maximus"], secondary:["Hip flexors (rear leg)","Quadriceps flexibility","Core"],
     cues:["More knee-dominant than the pistol and easier on ankle mobility — a good alternative for stiff ankles.","Touch the rear knee lightly, never slam it."],
     faults:["Torso pitching forward","Rear knee crashing down"]}
  ],
  advanced:["Weighted pistol","Shrimp squat","Deficit pistol","Jumping pistol"],
  support:["Ankle dorsiflexion mobility","Single-leg balance drills","Split squats","Hip mobility","Calf and tibialis work"]
},
/* ============ 3. BALANCE &amp; STRAIGHT-ARM SKILLS ============ */
{
  group:"Balance &amp; straight-arm skills", name:"Crow &amp; Elbow Lever", cat:"BAL", tag:"The first balance skills anyone can learn — a week-one win that teaches wrists, lean and bravery",
  ladder:[
    {name:"Frog stand", target:"Knees on the elbows, feet off the floor — <b>20s</b>", level:"foundation",
     primary:["Anterior deltoid","Serratus anterior","Wrist flexors"], secondary:["Triceps","Rectus abdominis","Finger flexors"],
     cues:["Spread the fingers and grip the floor with the fingertips — the fingers are the brakes.","Put a cushion in front of the head so the first attempts are not scary."],
     faults:["Straight arms, which makes balance far harder","Looking straight down instead of slightly forward"]},
    {name:"Crow pose (straight-ish arms)", target:"Knees higher on the arms — <b>30s</b>", level:"foundation",
     primary:["Anterior deltoid","Serratus anterior","Triceps"], secondary:["Wrist flexors","Core","Hip flexors"],
     cues:["Shift the shoulders forward past the wrists; the further forward, the lighter the feet.","Round the upper back slightly and squeeze the knees into the arms."],
     faults:["Not leaning far enough forward and stalling on tiptoes"]},
    {name:"Tuck elbow lever", target:"Elbows in the hip crease, knees tucked — <b>15s</b>", level:"intermediate",
     primary:["Anterior deltoid","Triceps","Rectus abdominis"], secondary:["Serratus anterior","Erector spinae","Wrist flexors"],
     cues:["Plant the elbows into the hip bones or just above the navel, then tip forward until the feet float.","Hands turned slightly out is usually kinder to the wrists."],
     faults:["Elbows sliding out to the ribs and losing the shelf"]},
    {name:"Straddle elbow lever", target:"Legs wide and straight — <b>10–15s</b>", level:"intermediate",
     primary:["Anterior deltoid","Rectus abdominis","Erector spinae"], secondary:["Triceps","Obliques","Glutes"],
     cues:["Keep looking forward — the head position steers the balance.","Straddling wide moves weight closer to the hands and makes the entry easier."],
     faults:["Hips dropping below the shoulders"]},
    {name:"Full elbow lever", target:"Legs together, body one line — <b>10s+</b>", level:"advanced",
     primary:["Anterior deltoid","Rectus abdominis","Erector spinae","Glutes"], secondary:["Triceps","Wrist flexors","Serratus anterior"],
     cues:["Point the toes and squeeze everything — a limp body wobbles.","From here, one-arm and press variations open up."],
     faults:["Sagging in the middle","Head dropping, which tips you over"]}
  ],
  advanced:["One-arm elbow lever","Elbow lever to handstand press","Elbow lever on parallettes","Human flag entries"],
  support:["Wrist prep sequence","Hollow-body holds","Planche leans","Finger and forearm strength","Thoracic extension"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Handstand", cat:"BAL", tag:"The keystone balance skill — it feeds pressing, planche and everything overhead",
  ladder:[
    {name:"Chest-to-wall handstand", target:"Belly to wall, shoulders shrugged, hollow — hold <b>60s</b>", level:"foundation",
     primary:["Deltoids","Trapezius (upper)","Serratus anterior"], secondary:["Triceps","Rectus abdominis","Glutes","Wrist flexors"],
     cues:["Push the floor away hard — ears covered by the arms, shoulders as open as they will go.","Ribs down, glutes squeezed, one straight line from wrist to toe."],
     faults:["Banana back with ribs flaring","Shoulders closed so the body leans away from the wall"]},
    {name:"Kick-up to balance", target:"Find the balance point at the wall, then step away from it", level:"foundation",
     primary:["Deltoids","Serratus anterior","Wrist flexors"], secondary:["Core","Hip flexors","Finger flexors"],
     cues:["Kick with a controlled, light leg — most people kick far too hard.","Learn a bail (cartwheel out) before you learn to balance; confidence comes from knowing how to land."],
     faults:["Kicking through and over","Elbows bending on the way up"]},
    {name:"Freestanding handstand", target:"Build <b>10s → 30s → 60s</b>", level:"intermediate",
     primary:["Deltoids","Serratus anterior","Wrist and finger flexors"], secondary:["Triceps","Core","Glutes","Upper trapezius"],
     cues:["Balance corrections come from the fingers and wrists first, hips second.","Fix the line before chasing time — a straight 15-second hold beats a banana minute."],
     faults:["Arching to hold balance","Holding the breath"]},
    {name:"Straddle or tuck press", target:"Press up without kicking, and control the way back down", level:"advanced",
     primary:["Deltoids","Serratus anterior","Hip flexors"], secondary:["Rectus abdominis","Hamstring flexibility","Wrist flexors"],
     cues:["Lean the shoulders forward first, then let the hips rise — it is a lean, not a lift.","Compression and straddle flexibility limit this more than strength does."],
     faults:["Trying to lift the hips before leaning","Jumping into the press"]},
    {name:"One-arm handstand", target:"A full track of its own — see the next card once your two-arm hold is solid", level:"elite",
     primary:["Deltoids","Serratus anterior","Obliques"], secondary:["Wrist and finger flexors","Core"],
     cues:["Do not start this until a 60-second freestanding hold feels boring."],
     faults:["Chasing it too early and grinding the wrists"]}
  ],
  advanced:["Press to handstand","Handstand push-ups","Planche to handstand","Handstand walking","One-arm work"],
  support:["Wrist prep sequence","Hollow-body and banana drills","Shoulder flexion mobility","Toe- and heel-pull balance drills","Chest-to-wall shrugs"]
},
{
  group:"Balance &amp; straight-arm skills", name:"One-Arm Handstand", cat:"BAL", tag:"The handstand endgame — a rock-solid two-arm hold is the price of entry",
  ladder:[
    {name:"Bulletproof freestanding handstand", target:"Effortless <b>60s</b> before you start shifting", level:"foundation",
     primary:["Deltoids","Serratus anterior","Wrist flexors"], secondary:["Core","Glutes"],
     cues:["Consistency matters more than the single best hold — 8 out of 10 attempts should be clean."],
     faults:["Moving on with an inconsistent two-arm hold"]},
    {name:"Weight shifts and taps", target:"Load one arm fully, tap the other hand off the floor", level:"intermediate",
     primary:["Deltoids","Obliques","Serratus anterior"], secondary:["Wrist and finger flexors","Quadratus lumborum"],
     cues:["Open the hips slightly toward the loaded side and stack the shoulder over the hand.","Widen the hand spacing first; a wider base makes the shift possible."],
     faults:["Shifting the hips without shifting the shoulder"]},
    {name:"Assisted one-arm", target:"Free hand on a low block, wall or fingertips", level:"advanced",
     primary:["Deltoids","Obliques","Serratus anterior"], secondary:["Wrist flexors","Core"],
     cues:["Reduce assistance by height first, then by finger count.","Slight straddle or a scissored leg position acts as a counterweight."],
     faults:["Leaning weight into the assist rather than the standing arm"]},
    {name:"Two-finger / staggered support", target:"Barely-there support from the free hand", level:"advanced",
     primary:["Deltoids","Obliques"], secondary:["Finger flexors","Core"],
     cues:["At this stage the free hand only informs balance — it should carry almost nothing."],
     faults:["Free hand quietly taking load when the hold gets hard"]},
    {name:"One-arm handstand", target:"Unassisted — build <b>2s → 5s → 10s</b>", level:"elite",
     primary:["Deltoids","Obliques","Serratus anterior","Wrist and finger flexors"], secondary:["Quadratus lumborum","Glutes","Adductors"],
     cues:["Expect months, not weeks. Short daily exposure beats long weekly sessions.","Wrist care is not optional here."],
     faults:["Training it fatigued, which reinforces a bent-arm habit"]}
  ],
  advanced:["One-arm on blocks or rings","One-arm press","One-arm handstand push-up","Flag-to-one-arm work"],
  support:["Wrist and finger strength prep","Scapular and thoracic stability","Side-leaning balance drills","Wall one-arm weight shifts","Hollow-body line control"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Handstand Push-Up", cat:"PUSH", tag:"Vertical pressing strength — the overhead push standard",
  ladder:[
    {name:"Pike push-up", target:"<b>10+</b> with hips high, head toward the floor", level:"foundation",
     primary:["Anterior deltoid","Triceps"], secondary:["Upper trapezius","Serratus anterior","Pectoralis major (upper)"],
     cues:["Walk the feet in until the torso is close to vertical — the more vertical, the more it counts.","Head goes slightly in front of the hands, not between them."],
     faults:["Hips dropping so it becomes a normal push-up"]},
    {name:"Elevated pike push-up", target:"Feet on a box — <b>8+</b> reps, deeper range", level:"foundation",
     primary:["Anterior deltoid","Triceps"], secondary:["Serratus anterior","Upper trapezius","Core"],
     cues:["Box height is your loading dial; raise it as strength comes.","Elbows at roughly 45°, not straight out sideways."],
     faults:["Half range at the bottom"]},
    {name:"Wall handstand push-up", target:"Build range until the head touches the floor", level:"intermediate",
     primary:["Deltoids","Triceps"], secondary:["Upper trapezius","Serratus anterior","Core"],
     cues:["Back-to-wall teaches the real line; chest-to-wall is harder and more honest.","Push all the way to a shrugged lockout every rep."],
     faults:["Arching off the wall","Stopping short of lockout"]},
    {name:"Freestanding handstand push-up", target:"Balance and press with no wall", level:"advanced",
     primary:["Deltoids","Triceps"], secondary:["Serratus anterior","Core","Wrist flexors"],
     cues:["Balance is the limiter, not strength — a solid 60s handstand comes first.","Slight forward lean as you descend keeps you on balance."],
     faults:["Piking to save the balance mid-rep"]},
    {name:"Deficit or 90° press", target:"Extra range on parallettes, or the 90-degree push-up", level:"elite",
     primary:["Deltoids","Triceps","Pectoralis major (upper)"], secondary:["Serratus anterior","Core","Wrist flexors"],
     cues:["Deficit work on parallettes is the natural next step and easier on the head and neck.","The 90-degree push-up needs planche-level lean as well as pressing strength."],
     faults:["Shoulders creeping forward out of the vertical line"]}
  ],
  advanced:["Freestanding handstand push-up","Deficit handstand push-up","90-degree push-up","One-arm handstand push-up work"],
  support:["Pike and overhead pressing","Wall handstand endurance","Slow negatives","Shoulder health and external rotation"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Planche", cat:"PUSH", tag:"Straight-arm horizontal push — body held level, on top of the hands",
  ladder:[
    {name:"Planche lean", target:"Shoulders well past the wrists, scapula protracted — hold <b>30s</b>", level:"foundation",
     primary:["Anterior deltoid","Serratus anterior","Biceps (long head)"], secondary:["Pectoralis major","Wrist flexors","Core"],
     cues:["Hands turned out or on parallettes; lean until the heels want to lift, then hold there.","Protract hard — push the upper back toward the ceiling."],
     faults:["Bending the elbows","Letting the shoulder blades pinch together"]},
    {name:"Tuck planche", target:"Knees to chest, hips at shoulder height — hold <b>15–20s</b>", level:"foundation",
     primary:["Anterior deltoid","Serratus anterior","Biceps (straight-arm load)"], secondary:["Pectoralis major","Core","Wrist flexors"],
     cues:["Round the upper back, posterior pelvic tilt, hips no lower than shoulders.","Elbows locked and turned so the crease faces forward."],
     faults:["Hips sitting low","Elbows unlocking under fatigue"]},
    {name:"Advanced tuck planche", target:"Hips open, flat back, knees still tucked — hold <b>15s</b>", level:"intermediate",
     primary:["Anterior deltoid","Serratus anterior","Biceps"], secondary:["Pectoralis major","Glutes","Core"],
     cues:["Open the hips to 90° while keeping the back flat — this is the big jump in difficulty.","Add time in 2-second steps; planche progress is slow by nature."],
     faults:["Arching the lower back to fake the hip opening"]},
    {name:"Straddle planche", target:"Legs wide and straight — hold <b>5–10s</b>", level:"advanced",
     primary:["Anterior deltoid","Serratus anterior","Biceps"], secondary:["Pectoralis major","Glutes","Adductors","Core"],
     cues:["Wider straddle shortens the lever — go as wide as your hips allow.","Band assistance under the hips is the most useful tool at this stage."],
     faults:["Legs drifting together","Piking at the hips"]},
    {name:"Full planche", target:"Legs together, body one line — hold <b>5s+</b>", level:"elite",
     primary:["Anterior deltoid","Serratus anterior","Biceps","Pectoralis major"], secondary:["Core","Glutes","Wrist flexors","Elbow tendons"],
     cues:["Years, not months. Elbow and bicep tendons need patient, gradual loading.","Keep sessions short and frequent, always fresh, never to failure."],
     faults:["Training through elbow pain"]}
  ],
  advanced:["Straddle planche push-up","Full planche push-up","Planche to handstand","Maltese","One-arm planche"],
  support:["Pseudo-planche push-ups","Scapular push-ups and protractions","Posterior pelvic tilt and hollow body","Band-assisted straddle holds","Wrist and forearm prep","Straight-arm work on parallettes"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Front Lever", cat:"PULL", tag:"Straight-arm horizontal pull — hanging level under the bar, face up",
  ladder:[
    {name:"Tuck front lever", target:"Knees tucked, back parallel to the floor — hold <b>20s</b>", level:"foundation",
     primary:["Latissimus dorsi","Rectus abdominis","Lower trapezius"], secondary:["Rhomboids","Triceps (long head)","Grip","Glutes"],
     cues:["Arms stay straight and pull down against the bar; think of pushing the bar toward your feet.","Posterior pelvic tilt and a rounded lower back — this is a hollow position, not a flat one."],
     faults:["Bent elbows","Hips higher than the shoulders","Shoulders left shrugged"]},
    {name:"Advanced tuck front lever", target:"Flat back, hips open, knees in — hold <b>15–20s</b>", level:"intermediate",
     primary:["Latissimus dorsi","Rectus abdominis","Lower trapezius"], secondary:["Rhomboids","Glutes","Grip"],
     cues:["Open the hips to 90° and keep the back flat, not arched.","If the position sags after 5 seconds, you are one step ahead of yourself."],
     faults:["Arched lower back","Sinking hips"]},
    {name:"One-leg front lever", target:"One leg extended, one tucked — hold <b>10–15s</b> per side", level:"intermediate",
     primary:["Latissimus dorsi","Rectus abdominis"], secondary:["Glutes","Obliques","Lower trapezius","Grip"],
     cues:["Keep the hips square; the tucked side likes to drop.","Alternate the extended leg every set."],
     faults:["Hips rotating open"]},
    {name:"Straddle front lever", target:"Both legs straight and wide — hold <b>10s</b>", level:"advanced",
     primary:["Latissimus dorsi","Rectus abdominis","Lower trapezius"], secondary:["Glutes","Adductors","Grip","Triceps"],
     cues:["Push the legs wide and actively — a passive straddle collapses.","Band under the hips lets you train the full shape earlier."],
     faults:["Legs drifting together","Chest dropping below the hips"]},
    {name:"Full front lever", target:"Legs together, body flat — hold <b>5s+</b>", level:"elite",
     primary:["Latissimus dorsi","Rectus abdominis","Lower trapezius","Glutes"], secondary:["Rhomboids","Triceps (long head)","Grip","Hamstrings"],
     cues:["Everything squeezes: glutes, quads, toes. A tight body is a lighter body to hold.","Negatives from an inverted hang build the last stretch of the range."],
     faults:["Piking at the hips","Head dropping back"]}
  ],
  advanced:["Front lever raises","Front lever rows and pulls","Ice cream makers","Touch pulls","One-arm tuck front lever"],
  support:["Scapular pulls from a dead hang","Straight-arm band pulldowns","Tuck front lever raises","Hanging leg raises","Hollow-body holds","Negatives from an inverted hang"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Back Lever", cat:"PULL", tag:"Straight-arm horizontal pull — level under the bar, face down. Mind the elbows.",
  ladder:[
    {name:"German hang", target:"Comfortable shoulder-extension hang — <b>30s</b> relaxed", level:"foundation",
     primary:["Shoulder extensors","Latissimus dorsi (stretch)"], secondary:["Biceps","Pectoralis major (stretch)","Grip"],
     cues:["Enter slowly through a skin-the-cat, never drop into it.","Rings let the shoulders rotate freely and are much kinder than a fixed bar."],
     faults:["Going deeper than the shoulders are ready for"]},
    {name:"Tuck back lever", target:"Rolled through to a face-down tuck — hold <b>20s</b>", level:"foundation",
     primary:["Anterior deltoid","Pectoralis major","Biceps"], secondary:["Erector spinae","Glutes","Grip","Rhomboids"],
     cues:["Elbows locked but never hyperextended — a slight bend is safer than a jammed joint.","Head neutral, eyes on the floor beneath you."],
     faults:["Hyperextending the elbows","Rushing past the tuck stage"]},
    {name:"Advanced tuck back lever", target:"Hips open, knees tucked — hold <b>15s</b>", level:"intermediate",
     primary:["Anterior deltoid","Pectoralis major","Biceps"], secondary:["Erector spinae","Glutes","Grip"],
     cues:["Squeeze the shoulder blades and keep the chest proud — the body should be flat, not folded.","Progress by opening the hips, not by lowering the hips."],
     faults:["Piking so the hips ride high"]},
    {name:"Straddle back lever", target:"Legs straight and wide — hold <b>10s</b>", level:"advanced",
     primary:["Anterior deltoid","Pectoralis major","Biceps","Erector spinae"], secondary:["Glutes","Adductors","Grip"],
     cues:["Widen the straddle to shorten the lever, then narrow it over the weeks.","Come out of it under control; the drop out is where elbows get hurt."],
     faults:["Bailing suddenly from the hold"]},
    {name:"Full back lever", target:"Legs together, body flat — hold <b>5s+</b>", level:"elite",
     primary:["Anterior deltoid","Pectoralis major","Biceps","Erector spinae"], secondary:["Glutes","Hamstrings","Grip","Rhomboids"],
     cues:["Bicep tendon load is high here — build slowly and stop at the first sign of elbow pain.","Supinated (underhand) grip is harder on the biceps; pronated is more common."],
     faults:["Training through elbow discomfort","Arching hard instead of holding a flat line"]}
  ],
  advanced:["Back lever pulls","Negatives to and from inverted","One-leg back lever","Back lever presses"],
  support:["Skin the cat, slow and controlled","German hang stretch","Straight-arm strength","Scapular and shoulder prep","Bicep and elbow tendon prep — go slow"]
},
{
  group:"Balance &amp; straight-arm skills", name:"Human Flag", cat:"CORE", tag:"Sideways hold on a vertical pole — top arm pulls, bottom arm presses",
  ladder:[
    {name:"Clutch flag", target:"Pole in the elbow crease, body sideways — hold <b>10s</b>", level:"foundation",
     primary:["Obliques","Latissimus dorsi","Pectoralis major"], secondary:["Biceps","Quadratus lumborum","Grip"],
     cues:["A great first taste of the flag shape with far less shoulder demand.","Wedge the pole tightly between the elbow crease and the chest."],
     faults:["Loose elbow grip, which slips"]},
    {name:"Support setup and vertical flag", target:"Grip locked, hips up, feet toward the sky", level:"foundation",
     primary:["Latissimus dorsi","Deltoids","Obliques"], secondary:["Triceps","Grip","Erector spinae"],
     cues:["Top hand pulls down, bottom hand pushes up — think of bending the pole between your hands.","Hands about shoulder-width apart on the pole; too close kills leverage."],
     faults:["Both arms pulling","Hands too close together"]},
    {name:"Tuck flag", target:"Body sideways, knees tucked — hold and control", level:"intermediate",
     primary:["Obliques","Latissimus dorsi","Deltoids"], secondary:["Quadratus lumborum","Serratus anterior","Grip"],
     cues:["Lower from the vertical flag rather than trying to lift into it.","Keep the bottom arm locked straight the whole way."],
     faults:["Bottom arm bending and collapsing"]},
    {name:"One-leg flag", target:"Lower from vertical with one leg extended", level:"intermediate",
     primary:["Obliques","Latissimus dorsi","Deltoids"], secondary:["Glutes","Adductors","Grip"],
     cues:["Extend the top leg first; keeping the bottom leg tucked is the easier version.","Alternate sides — the flag builds a very lopsided body if you do not."],
     faults:["Hips rolling backward out of the plane"]},
    {name:"Straddle flag", target:"Legs wide and straight, body horizontal — hold <b>5–10s</b>", level:"advanced",
     primary:["Obliques","Latissimus dorsi","Deltoids","Quadratus lumborum"], secondary:["Glutes","Adductors","Serratus anterior","Grip"],
     cues:["Wide legs shorten the lever considerably — use it.","Squeeze the whole body; the flag punishes any slack."],
     faults:["Sagging in the middle"]},
    {name:"Full flag", target:"Legs together, body one clean line", level:"elite",
     primary:["Obliques","Latissimus dorsi","Deltoids","Quadratus lumborum"], secondary:["Glutes","Triceps","Grip","Erector spinae"],
     cues:["Keep the body in one plane — no twisting toward the pole.","Strong sides make strong flags: side plank and lateral core work pay off."],
     faults:["Rotating out of plane","Legs drifting apart"]}
  ],
  advanced:["Flag pull-ups","Flag raises and transitions","Moving (walking) flag","Flag to one-arm handstand"],
  support:["Side plank progressions","Oblique and lateral core work","Top-arm pulls and bottom-arm presses","Overhead pressing strength","Grip strength"]
},
{
  group:"Balance &amp; straight-arm skills", name:"L-sit → V-sit → Manna", cat:"CORE", tag:"Straight-arm support plus compression — one of the hardest lines in the sport",
  ladder:[
    {name:"Support hold with tuck", target:"Straight arms, shoulders depressed, knees tucked — <b>20s</b>", level:"foundation",
     primary:["Triceps","Lower trapezius","Rectus abdominis"], secondary:["Hip flexors","Serratus anterior","Wrist flexors"],
     cues:["Push the floor or bars down hard and pull the shoulders away from the ears.","Parallettes are far kinder to the wrists than the floor."],
     faults:["Shoulders shrugged","Elbows bent"]},
    {name:"One-leg L-sit", target:"One leg straight, one tucked — <b>15s</b> per side", level:"foundation",
     primary:["Hip flexors","Rectus abdominis","Triceps"], secondary:["Quadriceps","Lower trapezius"],
     cues:["Alternate legs and keep the hips level.","Point the toes of the straight leg; it tightens the whole chain."],
     faults:["Leaning back to lift the leg"]},
    {name:"L-sit", target:"Legs straight, parallel to the floor — hold <b>15–30s</b>", level:"intermediate",
     primary:["Hip flexors (iliopsoas)","Rectus abdominis","Triceps","Quadriceps"], secondary:["Lower trapezius","Serratus anterior","Hamstring flexibility"],
     cues:["Depress the shoulders first, then lift the legs — most people do it the other way round.","Tight hamstrings will limit this more than weak abs; stretch alongside."],
     faults:["Rounding the back and leaning back","Knees bending"]},
    {name:"V-sit", target:"Legs raised above parallel", level:"advanced",
     primary:["Hip flexors","Rectus abdominis","Quadriceps"], secondary:["Lower trapezius","Triceps","Adductors"],
     cues:["Lean the shoulders slightly back and press down hard.","Straddle V-sit first, legs together after."],
     faults:["Piking the chest forward instead of lifting the legs"]},
    {name:"Manna", target:"Hips behind the hands, legs toward the face", level:"elite",
     primary:["Hip flexors","Rectus abdominis","Triceps","Anterior deltoid (extension)"], secondary:["Shoulder extensors","Wrist flexors","Quadriceps"],
     cues:["Demands extreme shoulder extension and compression flexibility — mobility work is most of the training.","Years of patient work; treat it as a long-term hobby skill."],
     faults:["Forcing shoulder extension without the mobility to support it"]}
  ],
  advanced:["V-sit for time","Manna","Straddle press links","L-sit pull-ups"],
  support:["Pike and seated compression drills","Hamstring flexibility","Hip-flexor strength","Straight-arm support holds","Hollow body"]
},
/* ============ 4. DYNAMIC, BARS &amp; RINGS ============ */
{
  group:"Dynamic, bars &amp; rings", name:"Swinging &amp; Bar Basics", cat:"BAR", tag:"Learning to move on the bar, not just hang on it — the entry point to every trick",
  ladder:[
    {name:"Passive swing", target:"Small relaxed swing, controlled stop — <b>10</b> swings", level:"foundation",
     primary:["Grip","Latissimus dorsi"], secondary:["Shoulder stabilisers","Core"],
     cues:["Start the swing from the shoulders, not by kicking the legs.","Learn to stop the swing dead — control matters more than amplitude."],
     faults:["Letting the shoulders go fully passive at the back of the swing"]},
    {name:"Tap swing (active swing)", target:"Hollow to arch and back, shoulders driving — <b>8</b>", level:"foundation",
     primary:["Latissimus dorsi","Rectus abdominis","Shoulder flexors"], secondary:["Glutes","Grip","Erector spinae"],
     cues:["Two shapes only: hollow at the front, arch at the back, switching sharply under the bar.","Arms stay straight; the power comes from the shoulders and midsection."],
     faults:["Bending the arms","Banana body with no clear shape change"]},
    {name:"Kip / knee raise swing", target:"Knees drive up at the front of the swing — <b>6</b>", level:"intermediate",
     primary:["Hip flexors","Rectus abdominis","Latissimus dorsi"], secondary:["Grip","Shoulder flexors"],
     cues:["Time the knee drive at the front of the swing, then push the bar down as the hips rise.","This timing is exactly what a kipping muscle-up borrows."],
     faults:["Kipping early, which kills the momentum"]},
    {name:"Hip pullover", target:"Roll over the bar into support from a hang", level:"intermediate",
     primary:["Latissimus dorsi","Rectus abdominis","Hip flexors"], secondary:["Biceps","Grip","Triceps"],
     cues:["Pull the bar to the hips and lead with the hips, not the head.","A small jump-assisted version first; then from a static hang."],
     faults:["Trying to muscle it with the arms only","Head thrown back"]},
    {name:"Back hip circle", target:"From support, circle backward around the bar and finish in support", level:"advanced",
     primary:["Rectus abdominis","Latissimus dorsi","Hip flexors"], secondary:["Grip","Wrist extensors","Triceps"],
     cues:["Keep the hips glued to the bar the whole way around.","Shift the hands around the bar as you rotate so you finish in a strong support."],
     faults:["Hips leaving the bar mid-circle","Not re-gripping on top"]},
    {name:"Controlled dismount", target:"Swing, release at the front, land balanced", level:"advanced",
     primary:["Latissimus dorsi","Core","Legs (landing)"], secondary:["Grip","Glutes","Quadriceps"],
     cues:["Practise releasing from a small swing well before a big one.","Land with soft knees and hips, eyes forward."],
     faults:["Releasing too late and landing off balance"]}
  ],
  advanced:["Kipping muscle-up","360 bar spin","Toes-to-bar for reps","Flip dismounts","Giant swings (coached)"],
  support:["Dead and active hangs","Hollow and arch shape drills","Grip work","Shoulder mobility","Landing practice from a box"]
},
{
  group:"Dynamic, bars &amp; rings", name:"Muscle-Up", cat:"BAR", tag:"Pull-up to dip in one move — the classic bar-to-support transition",
  ladder:[
    {name:"Strict chest-to-bar pull-up", target:"<b>8–10</b> clean, chest touching the bar", level:"foundation",
     primary:["Latissimus dorsi","Biceps brachii","Lower trapezius"], secondary:["Rear deltoid","Core","Grip"],
     cues:["Height is the entry ticket: if the chest cannot reach the bar, the transition will not happen.","Lean back slightly and pull the bar toward the sternum."],
     faults:["Chin-over-bar only","Kipping to reach"]},
    {name:"Straight-bar dip", target:"<b>8–10</b> full-depth dips over the bar", level:"foundation",
     primary:["Triceps","Pectoralis major"], secondary:["Anterior deltoid","Core","Wrist extensors"],
     cues:["Lean the chest slightly over the bar to stay balanced.","This is the second half of the muscle-up — train it before you need it."],
     faults:["Sitting upright and falling backwards off the bar"]},
    {name:"Explosive high pull", target:"Pull the bar to the sternum or lower ribs", level:"intermediate",
     primary:["Latissimus dorsi","Biceps","Lower trapezius"], secondary:["Rear deltoid","Core","Grip"],
     cues:["Pull as fast as you can and hold the top for a beat.","False grip on the bar (wrist over the bar) removes the wrist re-grip problem entirely."],
     faults:["Pulling straight up rather than back and up"]},
    {name:"Transition drills", target:"Band-assisted reps plus slow negatives through the sticking point", level:"intermediate",
     primary:["Pectoralis major","Triceps","Latissimus dorsi"], secondary:["Rotator cuff","Biceps","Core"],
     cues:["The transition is a lean, not a pull — get the chest over the bar early.","Negatives from support down through the transition build exactly the right strength."],
     faults:["Waiting until the top to lean forward","Elbows flaring wide in the catch"]},
    {name:"Strict bar muscle-up", target:"No kip, controlled turnover", level:"advanced",
     primary:["Latissimus dorsi","Pectoralis major","Triceps","Biceps"], secondary:["Rotator cuff","Core","Grip","Rear deltoid"],
     cues:["Fast pull, early lean, then press out. Hesitation is what drops people back down.","False grip makes strict versions much more achievable."],
     faults:["Chicken-winging one elbow through first","Kipping when the aim is strict"]}
  ],
  advanced:["Ring muscle-up","Slow / strict muscle-up","L-sit muscle-up","Wide or weighted muscle-up","Muscle-up to handstand"],
  support:["False-grip holds","Transition negatives","Explosive pull-ups","Straight-bar dip volume","Straight-arm and lat prep"]
},
{
  group:"Dynamic, bars &amp; rings", name:"Ring Muscle-Up", cat:"RING", tag:"The rings version — false grip and a floating transition make it its own beast",
  ladder:[
    {name:"False-grip hang and pull", target:"Hold the false grip, then pull-ups keeping it — <b>5+</b>", level:"foundation",
     primary:["Forearm flexors","Latissimus dorsi","Biceps"], secondary:["Grip","Wrist flexors"],
     cues:["Wrist sits on top of the ring, hand cocked over — it feels awful for the first few weeks.","Build tolerance with short hangs; the wrists adapt slowly."],
     faults:["Losing the grip halfway up","Training it to failure early on"]},
    {name:"Ring dips with turnout", target:"<b>8–10</b> full depth, rings turned out at the top", level:"foundation",
     primary:["Triceps","Pectoralis major"], secondary:["Rotator cuff","Biceps","Serratus anterior"],
     cues:["Own a 30-second turned-out support hold first.","Keep the rings close to the body throughout."],
     faults:["Rings drifting away","No turnout at lockout"]},
    {name:"Explosive false-grip pull", target:"Pull the rings down to sternum height", level:"intermediate",
     primary:["Latissimus dorsi","Biceps","Lower trapezius"], secondary:["Rear deltoid","Core","Grip"],
     cues:["Pull the rings to the chest and slightly apart.","Keep the elbows in — flared elbows stall the transition."],
     faults:["Pulling with the rings drifting forward"]},
    {name:"Transition work", target:"Band-assisted plus slow negatives through the catch", level:"intermediate",
     primary:["Pectoralis major","Triceps","Biceps"], secondary:["Rotator cuff","Latissimus dorsi","Core"],
     cues:["Low rings let you practise the transition with your feet on the floor — the single best drill here.","Keep the rings tight to the ribs as you roll through."],
     faults:["Letting the rings swing away from the body","Rushing the catch"]},
    {name:"Strict ring muscle-up", target:"No swing, controlled turnover into support", level:"advanced",
     primary:["Latissimus dorsi","Pectoralis major","Biceps","Triceps"], secondary:["Rotator cuff","Core","Grip","Serratus anterior"],
     cues:["Pull high, roll the shoulders over the rings, then press.","Finish with a turned-out lockout, not a slumped support."],
     faults:["Uneven turnover with one arm first","Elbows flaring in the catch"]}
  ],
  advanced:["Slow / strict ring muscle-up","L-sit ring muscle-up","Wide ring muscle-up","Consecutive reps","Ring muscle-up to handstand"],
  support:["False-grip conditioning — wrists are tender, go slow","Ring support holds with turnout","Turned-out ring dips","Low-ring transition drills","Straight-arm and lat prep"]
},
{
  group:"Dynamic, bars &amp; rings", name:"Bar Tricks &amp; Freestyle", cat:"BAR", tag:"Where strength turns into play — dynamic moves once the basics are owned",
  ladder:[
    {name:"Ice cream maker", target:"From an inverted hang, roll out to a front lever position and back — <b>5</b>", level:"intermediate",
     primary:["Latissimus dorsi","Rectus abdominis","Lower trapezius"], secondary:["Biceps","Grip","Glutes"],
     cues:["Start tucked and slow. Straight arms throughout.","This is the bridge between static levers and dynamic bar work."],
     faults:["Falling out of the roll instead of controlling it"]},
    {name:"Kipping muscle-up", target:"Swing, kip, transition — <b>3</b> clean reps", level:"intermediate",
     primary:["Latissimus dorsi","Hip flexors","Pectoralis major","Triceps"], secondary:["Core","Grip","Rotator cuff"],
     cues:["Learn a strict or near-strict version first so the shoulders can handle the catch.","Timing beats effort — the kip should feel light, not violent."],
     faults:["Yanking with the arms while the swing is out of time"]},
    {name:"360 bar spin", target:"Full rotation around the bar, released and re-caught", level:"advanced",
     primary:["Latissimus dorsi","Core","Grip"], secondary:["Shoulder stabilisers","Rotator cuff"],
     cues:["Build it in halves: quarter turns, then half, then full, always from a small swing.","Spot the bar with your eyes as you come around."],
     faults:["Attempting it with no swing control","Releasing before the body is in line"]},
    {name:"Shrimp flip / bar flip", target:"Flip over the bar and catch in support or hang", level:"advanced",
     primary:["Rectus abdominis","Hip flexors","Latissimus dorsi"], secondary:["Grip","Triceps","Shoulder stabilisers"],
     cues:["A pullover and a back hip circle first — they teach the rotation safely.","Use a spotter and a low bar for the first attempts."],
     faults:["Trying it fatigued","Weak grip on the catch"]},
    {name:"Hefesto (reverse muscle-up)", target:"From a back lever position, pull up into support behind the bar", level:"elite",
     primary:["Biceps brachii","Latissimus dorsi","Brachialis"], secondary:["Rear deltoid","Rhomboids","Grip","Erector spinae"],
     cues:["Brutal on the bicep tendon — full back lever and heavy chin-up strength come first.","Band assistance for months is the sane route."],
     faults:["Attempting it without a solid back lever","Ignoring elbow warning signs"]}
  ],
  advanced:["Hefesto","Front and back flip dismounts","360 to muscle-up","Rocket / dynamic combos","Freestyle sets to music"],
  support:["Swing and shape drills","Grip endurance","Elbow and bicep tendon conditioning","Core rotation control","Landing and bailing practice"]
},
{
  group:"Dynamic, bars &amp; rings", name:"Rings &amp; the Cross", cat:"RING", tag:"Unstable, honest and humbling — the rings expose everything the bar hides",
  ladder:[
    {name:"Ring support hold", target:"Arms locked, rings turned out — <b>30s</b>", level:"foundation",
     primary:["Triceps","Lower trapezius","Pectoralis major"], secondary:["Rotator cuff","Biceps","Serratus anterior","Core"],
     cues:["Turn the rings out until the thumbs point forward and press them into the hips.","If the rings shake, hold shorter sets more often rather than one long ugly one."],
     faults:["Losing turnout","Shoulders shrugging up"]},
    {name:"Ring row and ring push-up", target:"<b>12</b> rows, <b>10</b> push-ups with turnout at lockout", level:"foundation",
     primary:["Latissimus dorsi","Pectoralis major","Triceps"], secondary:["Rotator cuff","Rhomboids","Core"],
     cues:["Turn the rings out at the end of each rep to train the position that everything else needs.","Body stays a plank in both movements."],
     faults:["Hips sagging","Rings wobbling out of control"]},
    {name:"Ring dip and ring L-sit", target:"<b>8</b> dips with turnout; L-sit <b>15s</b>", level:"intermediate",
     primary:["Triceps","Pectoralis major","Hip flexors"], secondary:["Rotator cuff","Rectus abdominis","Lower trapezius"],
     cues:["Depth on rings should never come at the cost of shoulder position.","Support hold time is the prerequisite for dip quality."],
     faults:["Dropping fast into the bottom","Elbows flaring"]},
    {name:"Ring back lever and skin the cat", target:"Tuck back lever on rings — <b>15s</b>", level:"advanced",
     primary:["Anterior deltoid","Pectoralis major","Biceps"], secondary:["Erector spinae","Grip","Rotator cuff"],
     cues:["Rings let the shoulders rotate naturally, which is why they are safer than a bar for lever work.","Never drop into these positions; lower into them."],
     faults:["Speed on the way down","Elbow hyperextension"]},
    {name:"Iron cross progressions", target:"Band-assisted cross holds, then partial ranges", level:"elite",
     primary:["Pectoralis major","Latissimus dorsi","Biceps (tendon load)"], secondary:["Rotator cuff","Teres major","Rhomboids","Core"],
     cues:["Years of tendon preparation — bicep tendon and elbow health decide whether this is possible at all.","Use bands or a cross machine and build very gradually. Rushing this hurts people."],
     faults:["Skipping the slow tendon build","Training it fresh off an elbow niggle"]}
  ],
  advanced:["Iron cross","Ring handstand","Ring front lever","Bulgarian dip","Roll to support"],
  support:["Turned-out support holds","Rotator cuff and external rotation work","Elbow and bicep tendon conditioning","Straight-arm strength","Ring row volume"]
},
{
  group:"Dynamic, bars &amp; rings", name:"One-Arm Pull-Up", cat:"PULL", tag:"The benchmark single-arm pull — a patience skill, and the elbow decides the timeline",
  ladder:[
    {name:"Heavy weighted pull-ups", target:"<b>+50%</b> bodyweight or more for reps", level:"foundation",
     primary:["Latissimus dorsi","Biceps brachii","Brachialis"], secondary:["Lower trapezius","Grip","Core"],
     cues:["Build the raw strength base first; skipping this is why most one-arm attempts stall.","Full range under load, every rep."],
     faults:["Adding weight faster than the elbows adapt"]},
    {name:"Archer pull-ups", target:"Load one side, other arm nearly straight — <b>5</b> per side", level:"intermediate",
     primary:["Latissimus dorsi","Biceps brachii"], secondary:["Obliques","Grip","Rear deltoid"],
     cues:["Wide grip, pull toward one hand, keep the other arm long.","Alternate sides evenly and pay attention to the weaker side."],
     faults:["The straight arm bending to help"]},
    {name:"Assisted one-arm", target:"Towel, band or finger assist on the free hand", level:"intermediate",
     primary:["Latissimus dorsi","Biceps brachii","Grip"], secondary:["Obliques","Rotator cuff","Core"],
     cues:["Move the assisting hand progressively lower down the towel over the weeks.","Keep the body from swinging — rotation is the enemy."],
     faults:["Yanking with the assisting arm"]},
    {name:"One-arm negatives", target:"Slow, controlled lowering — <b>5 × 5s</b>", level:"advanced",
     primary:["Latissimus dorsi","Biceps brachii","Brachialis"], secondary:["Grip","Obliques","Rotator cuff"],
     cues:["The most productive drill in this track — and the hardest on the elbow. Two or three sets, no more.","Stop the set the moment the tempo breaks."],
     faults:["Dropping through the bottom half","Doing too many sets and irritating the elbow"]},
    {name:"One-arm pull-up", target:"Full range, one arm, no assist", level:"elite",
     primary:["Latissimus dorsi","Biceps brachii","Brachialis","Grip"], secondary:["Obliques","Rotator cuff","Core","Rhomboids"],
     cues:["Expect a year or more of consistent work. Frequency low, quality high.","A little body rotation is normal; a swing is not."],
     faults:["Training it through elbow pain — the classic way to lose six months"]}
  ],
  advanced:["Strict one-arm pull-up for reps","Weighted one-arm pull-up","One-arm muscle-up"],
  support:["Grip and finger strength","Bicep and elbow tendon prep — patient loading","Explosive high pulls","Scapular strength","Weighted vertical pulling"]
},
];

/* ---- How each exercise is performed. Key = "Track|Exercise". ----
   m = which movement animation to show, do = the three steps. */
const HOWTO = {
"Push-Up|Incline push-up":{m:"incline",do:[
 "Hands on a bar, bench or windowsill, slightly wider than the shoulders, body in one line from heel to head.",
 "Lower the chest to the bar with the elbows tracking back at about 45°.",
 "Press away until the arms lock and the upper back spreads. Lower the bar as you get stronger."]},
"Push-Up|Full push-up":{m:"pushup",do:[
 "Hands on the floor under the shoulders, feet together, glutes and ribs squeezed so the body is a plank.",
 "Lower until the chest is a fist's height from the floor, elbows back, not flared out sideways.",
 "Press the floor away and push the upper back toward the ceiling at the top."]},
"Push-Up|Diamond / close push-up":{m:"pushup",do:[
 "Hands together under the sternum, index fingers and thumbs almost touching.",
 "Lower with the elbows brushing the ribs — they stay tight to the body the whole way.",
 "Press back up and lock out. Wrists sore? Use fists or parallettes."]},
"Push-Up|Archer push-up":{m:"pushup",do:[
 "Take a wide hand position, slightly wider than a normal push-up.",
 "Lower toward one hand while the other arm straightens out along the floor. Keep the hips square.",
 "Push back to the middle, then repeat to the other side. Slow on the way down."]},
"Push-Up|Pseudo-planche push-up":{m:"pushup",do:[
 "Hands beside the hips, fingers turned slightly out, or use parallettes.",
 "Lean the shoulders forward past the hands and hold that lean as you lower.",
 "Press back up without losing the lean. The lean is the exercise, not the depth."]},
"Push-Up|One-arm push-up":{m:"pushup",do:[
 "One hand under the chest, feet apart for balance, free arm behind the back.",
 "Lower under control, bracing hard so the shoulders and hips stay square to the floor.",
 "Press up without twisting. Narrow the feet over the weeks to make it harder."]},

"Pull-Up|Scapular pull-up":{m:"hang",do:[
 "Hang from the bar with straight arms, hands about shoulder-width.",
 "Without bending the elbows, pull the shoulders down away from the ears. You rise a few centimetres.",
 "Hold a second at the top, then let the shoulders rise again under control."]},
"Pull-Up|Assisted pull-up or negative":{m:"pullup",do:[
 "Set a band under the foot or knee, or jump up so the chin starts above the bar.",
 "Lower yourself as slowly as you can, aiming for five full seconds.",
 "Finish every rep with completely straight arms and the shoulders set, not slumped."]},
"Pull-Up|Full pull-up":{m:"pullup",do:[
 "Hang with straight arms, legs together and slightly in front, ribs down.",
 "Set the shoulder blades down first, then drive the elbows toward your back pockets.",
 "Chin clearly over the bar, then lower all the way to a dead hang without swinging."]},
"Pull-Up|Chest-to-bar pull-up":{m:"pullup",do:[
 "Same hang, but lean back slightly from the start.",
 "Pull the chest, not the chin, toward the bar — think of pulling the bar down to your sternum.",
 "Touch the chest to the bar, hold a beat, lower under control."]},
"Pull-Up|Weighted pull-up":{m:"pullup",do:[
 "Add load with a dip belt or vest. Start with 5 kg, not with your ego.",
 "Perform a full-range strict pull-up — dead hang to chin over bar.",
 "If the range shortens or the tempo breaks, the weight is too heavy."]},
"Pull-Up|Archer / assisted one-arm":{m:"pullup",do:[
 "Take a wide grip, or hang a towel over the bar for the assisting hand.",
 "Pull yourself toward one hand while the other arm stays long and light.",
 "Lower under control and alternate sides. Move the assisting hand lower over the weeks."]},

"Row / Horizontal Pull|High bar row":{m:"row",do:[
 "Set a bar around hip height. Hang underneath it with straight arms and a steep body angle.",
 "Squeeze the glutes so the body is a plank, then pull the chest to the bar.",
 "Lower fully. Walk the feet forward a little each week to make it harder."]},
"Row / Horizontal Pull|Horizontal row":{m:"row",do:[
 "Lower the bar so the body is parallel to the floor with the heels on the ground.",
 "Pull the chest to the bar, pausing one second at the top with the shoulder blades squeezed.",
 "Lower slowly to straight arms without letting the hips drop."]},
"Row / Horizontal Pull|Feet-elevated row":{m:"row",do:[
 "Put the feet on a box so the body is level with, or slightly below, the bar.",
 "Row the chest to the bar keeping the ribs down and the back flat.",
 "Control the descent. The higher the feet, the heavier the row."]},
"Row / Horizontal Pull|Archer row":{m:"row",do:[
 "Take a wide grip on the bar, body horizontal, feet elevated if you can.",
 "Pull toward one hand while the other arm slides straight along the bar.",
 "Return to the middle and alternate. Keep the shoulders square, no twisting."]},
"Row / Horizontal Pull|One-arm row / front lever row":{m:"row",do:[
 "One hand on the bar, body horizontal, free arm across the chest.",
 "Row up while resisting the pull to rotate — the shoulders and hips stay square.",
 "Lower under control. Or perform rows while holding a tuck front lever."]},

"Dip|Support hold":{m:"dip",do:[
 "Jump or step up onto parallel bars, arms locked straight, hands by the hips.",
 "Push the bars down, pull the shoulders away from the ears, squeeze the legs together.",
 "Hold and breathe. Build to 30 seconds before adding dips."]},
"Dip|Bench or box dip":{m:"dip",do:[
 "Hands on the edge of a bench behind you, heels on the floor in front.",
 "Lower with the elbows pointing straight back until the upper arms are parallel to the floor.",
 "Press back to lockout. Straighter legs make it harder."]},
"Dip|Negative dip":{m:"dip",do:[
 "Start in a solid support hold on the bars.",
 "Lower yourself over five seconds until the shoulders are level with the elbows.",
 "Step off, climb back to support, repeat. Never free-fall through the bottom."]},
"Dip|Parallel bar dip":{m:"dip",do:[
 "Support hold to start, legs together, ribs down.",
 "Lower until the shoulders are just below the elbows. Lean forward for chest, stay upright for triceps.",
 "Press back to a full lockout and reset the shoulders each rep."]},
"Dip|Ring dip":{m:"dip",do:[
 "Start in a ring support with the rings turned out, thumbs pointing forward.",
 "Lower with the rings tight to the ribs, keeping the arms from drifting wide.",
 "Press up and turn the rings out again at the top."]},
"Dip|Weighted dip":{m:"dip",do:[
 "Hang a belt with a plate, or wear a vest. Add weight in small steps.",
 "Perform a full-depth dip with the same tempo as your bodyweight version.",
 "Lock out fully. If depth shrinks, drop the load."]},

"Hanging &amp; Grip|Passive dead hang":{m:"hang",do:[
 "Take a shoulder-width overhand grip, thumbs around the bar.",
 "Let the shoulders rise toward the ears and simply hang, breathing slowly.",
 "Step down before the grip fails completely. Build toward a minute."]},
"Hanging &amp; Grip|Active hang":{m:"hang",do:[
 "Hang with straight arms, legs together and slightly forward.",
 "Pull the shoulders down away from the ears and hold that position without bending the elbows.",
 "Add a hollow body — ribs down, glutes on — and hold for time."]},
"Hanging &amp; Grip|Hanging with movement":{m:"swing",do:[
 "From an active hang, shift the weight gently from side to side.",
 "Release one hand for a second at a time, keeping the hanging shoulder active.",
 "Build up to short single-arm hangs on each side."]},
"Hanging &amp; Grip|Skin the cat":{m:"skincat",do:[
 "Hang from rings or a bar, pull the knees to the chest and tuck tightly.",
 "Roll the hips backwards between the arms until the feet point at the floor behind you.",
 "Pause, then roll back the same way. Slowly — stop the moment anything pinches."]},
"Hanging &amp; Grip|Towel or fingertip hang":{m:"hang",do:[
 "Hang a towel over the bar and grip one end in each hand, or hang from the fingertips.",
 "Hold an active hang with the shoulders down.",
 "Two short sets at the end of a session is plenty. Do not chase a maximum every week."]},

"Core &amp; Compression|Hollow-body hold":{m:"dragonflag",do:[
 "Lie on your back, press the lower back flat into the floor.",
 "Lift the shoulders and legs just off the ground, arms overhead or by the sides.",
 "Hold while breathing. If the back lifts, bend the knees or raise the legs higher."]},
"Core &amp; Compression|Hanging knee raise":{m:"legraise",do:[
 "Hang from the bar with the shoulders active and no swing.",
 "Lift the knees above the hips and curl the pelvis under at the top.",
 "Lower slowly and stop any swing before the next rep."]},
"Core &amp; Compression|Hanging leg raise":{m:"legraise",do:[
 "Active hang, legs straight and together.",
 "Raise the legs to horizontal without swinging, keeping the shoulders engaged.",
 "Lower under control all the way down. Soft knees are fine if the hamstrings are tight."]},
"Core &amp; Compression|Toes to bar":{m:"legraise",do:[
 "Active hang with straight legs.",
 "Pull the bar slightly toward you with straight arms as the feet travel up.",
 "Touch the toes to the bar, then lower with control — no kip if the goal is strict."]},
"Core &amp; Compression|Dragon flag":{m:"dragonflag",do:[
 "Lie on a bench and grip behind your head. Only the shoulders stay in contact.",
 "Drive the whole body up so it is one rigid line pivoting on the shoulders.",
 "Lower slowly without folding at the hips. Start with tuck and single-leg versions."]},

"Squat &amp; Lunge|Bodyweight squat":{m:"squat",do:[
 "Feet about shoulder-width, toes slightly out, arms forward for balance.",
 "Sit down between the heels, knees tracking over the toes, chest tall.",
 "Reach full depth, then drive up through the whole foot. Heels stay down."]},
"Squat &amp; Lunge|Split squat":{m:"lunge",do:[
 "Step one foot forward into a long stance, torso tall.",
 "Lower straight down until the back knee touches lightly, front shin near vertical.",
 "Drive up through the front foot. Three seconds down makes it much harder."]},
"Squat &amp; Lunge|Bulgarian split squat":{m:"lunge",do:[
 "Rest the top of the back foot on a bench, front foot far enough forward.",
 "Lower until the back knee is close to the floor, weight in the front leg.",
 "Stand up through the front foot without pushing off the back leg."]},
"Squat &amp; Lunge|Box pistol / assisted pistol":{m:"pistol",do:[
 "Stand on one leg in front of a box, the other leg held out in front.",
 "Sit back and down under control until you touch the box.",
 "Stand straight back up. Lower the box a few centimetres every couple of weeks."]},
"Squat &amp; Lunge|Jump squat / explosive work":{m:"squat",do:[
 "Start in a quarter or half squat, arms ready to swing.",
 "Jump as high as you can, extending the hips fully.",
 "Land quietly through the whole foot and absorb with the hips. Stop when landings get loud."]},

"Hinge &amp; Hamstrings|Glute bridge":{m:"bridge",do:[
 "Lie on your back, knees bent, feet flat and close to the hips.",
 "Drive through the heels and lift the hips until the body is a straight line from knee to shoulder.",
 "Squeeze for two seconds at the top, then lower slowly. Do not arch the lower back."]},
"Hinge &amp; Hamstrings|Single-leg glute bridge":{m:"bridge",do:[
 "Same setup, but extend one leg straight out.",
 "Push through the heel of the working leg and lift the hips, keeping them level.",
 "Lower under control. The further the foot is from you, the more hamstring you get."]},
"Hinge &amp; Hamstrings|Nordic curl negative":{m:"nordic",do:[
 "Kneel with the ankles anchored under something solid, knees padded.",
 "Keep the hips extended and lower forward as slowly as you can, resisting all the way.",
 "Catch yourself with the hands and push back up. Four seconds down is a good target."]},
"Hinge &amp; Hamstrings|Slider or ring leg curl":{m:"bridge",do:[
 "Lie on your back with the heels in rings, on sliders, or on a towel.",
 "Lift the hips and hold them high, then pull the heels toward you.",
 "Extend the legs slowly without letting the hips drop."]},
"Hinge &amp; Hamstrings|Full Nordic curl":{m:"nordic",do:[
 "Kneel with the ankles anchored, hips straight, arms ready in front.",
 "Lower all the way to the floor under control, hips staying extended.",
 "Pull yourself back up with the hamstrings — no hip snap to cheat it."]},

"Pistol Squat|Assisted pistol":{m:"pistol",do:[
 "Stand on one leg holding a doorframe, ring or pole, or hold a small plate out in front.",
 "Sit down slowly on the standing leg, free leg reaching forward.",
 "Stand back up using as little assistance as possible — and note how much you needed."]},
"Pistol Squat|Box pistol":{m:"pistol",do:[
 "Stand on one leg in front of a box or bench, free leg forward.",
 "Lower under control and touch the box lightly. Do not sit and rest.",
 "Stand straight up. Lower the box as you get stronger."]},
"Pistol Squat|Full pistol":{m:"pistol",do:[
 "Stand on one leg, arms and free leg reaching forward as a counterbalance.",
 "Sit all the way down, heel flat, chest as tall as your ankles allow.",
 "Stand up in one controlled movement without touching down."]},
"Pistol Squat|Weighted or elevated pistol":{m:"pistol",do:[
 "Hold a kettlebell or plate at the chest, or stand on a step so the heel can drop below.",
 "Descend to full depth with the same control as an unloaded pistol.",
 "Stand up. Depth must not shrink when the load goes up."]},
"Pistol Squat|Shrimp squat":{m:"pistol",do:[
 "Stand on one leg and hold the other foot behind you with the same-side hand.",
 "Lower until the rear knee touches the floor lightly, torso as upright as possible.",
 "Stand back up. Easier on the ankles than a pistol, harder on the quads."]},
"Crow &amp; Elbow Lever|Frog stand":{m:"crow",do:[
 "Squat down, hands flat on the floor shoulder-width, elbows bent and knees resting on them.",
 "Lean the shoulders forward past the wrists until the feet float off the ground.",
 "Grip the floor with the fingertips to balance. Put a cushion in front of your head."]},
"Crow &amp; Elbow Lever|Crow pose (straight-ish arms)":{m:"crow",do:[
 "Same setup, but place the knees higher on the upper arms and straighten the arms more.",
 "Lean further forward — the further the shoulders travel, the lighter the feet.",
 "Hold, squeezing the knees into the arms, upper back slightly rounded."]},
"Crow &amp; Elbow Lever|Tuck elbow lever":{m:"elbowlever",do:[
 "Hands flat on the floor, fingers turned slightly out, elbows bent and planted into the hip bones.",
 "Tip the chest forward over the hands and let the feet lift, knees tucked.",
 "Hold with the eyes looking forward, not down."]},
"Crow &amp; Elbow Lever|Straddle elbow lever":{m:"elbowlever",do:[
 "From the tuck position, open the legs wide to the sides.",
 "Straighten the legs while keeping the hips level with the shoulders.",
 "Hold. A wide straddle keeps the weight close to the hands and makes it easier."]},
"Crow &amp; Elbow Lever|Full elbow lever":{m:"elbowlever",do:[
 "Elbows planted in the hips, chest forward, body starting to float.",
 "Extend both legs together into one straight line from head to toe.",
 "Squeeze everything and point the toes. Keep looking forward to hold the balance."]},

"Handstand|Chest-to-wall handstand":{m:"handstand",do:[
 "Start in a plank with the feet against the wall, hands about 20 cm from it.",
 "Walk the feet up the wall and the hands in until the belly faces the wall.",
 "Push the floor away, shoulders shrugged to the ears, ribs down, glutes squeezed. Hold."]},
"Handstand|Kick-up to balance":{m:"handstand",do:[
 "Hands shoulder-width, one leg forward, arms locked and ears covered.",
 "Kick up lightly — most people kick far too hard — and find the balance against the wall.",
 "Learn to bail with a cartwheel before you practise away from the wall."]},
"Handstand|Freestanding handstand":{m:"handstand",do:[
 "Kick up to a straight line: wrists, shoulders, hips and feet stacked.",
 "Correct small wobbles with the fingers and wrists first, the hips second.",
 "Hold as long as the line stays clean. Fix the shape before chasing time."]},
"Handstand|Straddle or tuck press":{m:"handstand",do:[
 "Stand in a straddle, hands on the floor between the feet, shoulders leaning forward.",
 "Keep leaning until the feet get light, then lift the hips over the shoulders.",
 "Bring the legs together overhead, and lower back down the same way."]},
"Handstand|One-arm handstand":{m:"handstand",do:[
 "Only start this when a 60-second freestanding hold feels boring.",
 "Widen the hands, shift the weight over one arm and stack the shoulder above the hand.",
 "See the One-Arm Handstand track for the full ladder."]},

"One-Arm Handstand|Bulletproof freestanding handstand":{m:"handstand",do:[
 "Kick up and hold a straight, quiet handstand.",
 "Aim for a full minute that feels effortless, on eight attempts out of ten.",
 "Only then start shifting weight to one side."]},
"One-Arm Handstand|Weight shifts and taps":{m:"handstand",do:[
 "Kick up with the hands a little wider than usual.",
 "Shift the shoulder over one hand and open the hips slightly toward that side.",
 "Tap the other hand off the floor for a moment, then return. Alternate sides."]},
"One-Arm Handstand|Assisted one-arm":{m:"handstand",do:[
 "Set a low block, or stand next to a wall, for the free hand.",
 "Shift fully onto the standing arm and rest the free hand lightly on the support.",
 "Hold. Reduce the assistance by lowering the height, then by using fewer fingers."]},
"One-Arm Handstand|Two-finger / staggered support":{m:"handstand",do:[
 "Same position, but the free hand rests on only one or two fingers.",
 "The free hand informs your balance — it should carry almost no weight.",
 "Hold and breathe. Take it away for a second at a time."]},
"One-Arm Handstand|One-arm handstand":{m:"handstand",do:[
 "Kick up wide, shift onto one arm, stack the shoulder directly over the hand.",
 "Take the free hand away and control the balance from the fingers of the standing hand.",
 "Short, frequent, fresh practice. Wrist care is not optional here."]},

"Handstand Push-Up|Pike push-up":{m:"pike",do:[
 "Start in a downward-dog shape: hips high, hands shoulder-width, feet walked in.",
 "Lower the top of the head toward the floor slightly in front of the hands.",
 "Press back up to straight arms. The more vertical the torso, the harder it gets."]},
"Handstand Push-Up|Elevated pike push-up":{m:"pike",do:[
 "Put the feet on a box so the torso is close to vertical.",
 "Lower the head toward the floor with the elbows at about 45°.",
 "Press to a full lockout. Raise the box as you get stronger."]},
"Handstand Push-Up|Wall handstand push-up":{m:"hspu",do:[
 "Kick up to the wall, back or chest facing it, arms locked.",
 "Lower until the head lightly touches the floor, elbows tracking forward and slightly out.",
 "Press back to a shrugged lockout every rep."]},
"Handstand Push-Up|Freestanding handstand push-up":{m:"hspu",do:[
 "Kick up to a balanced freestanding handstand.",
 "Lean the shoulders slightly forward as you lower to keep the balance.",
 "Press back to lockout without piking. Balance is the limiter, not strength."]},
"Handstand Push-Up|Deficit or 90° press":{m:"hspu",do:[
 "Set up on parallettes or blocks so the head can travel below the hands.",
 "Lower through the extra range under full control.",
 "Press back to lockout. Kinder on the head and neck than a floor deficit."]},

"Planche|Planche lean":{m:"planche",do:[
 "Start in a plank with the hands turned out, or on parallettes.",
 "Push the floor away hard and lean the shoulders forward past the wrists.",
 "Lean until the heels want to lift, and hold there with the arms locked."]},
"Planche|Tuck planche":{m:"planche",do:[
 "From a crouch, hands beside the hips, arms locked and elbows turned so the creases face forward.",
 "Lean forward and lift the knees to the chest until the hips are at shoulder height.",
 "Round the upper back, tuck the pelvis, and hold."]},
"Planche|Advanced tuck planche":{m:"planche",do:[
 "Start in a tuck planche with the arms locked and the shoulders well forward.",
 "Open the hips to 90° so the back becomes flat, knees still tucked.",
 "Hold without arching the lower back. Add time in two-second steps."]},
"Planche|Straddle planche":{m:"planche",do:[
 "Arms locked, shoulders leaning far forward over the hands.",
 "Extend the legs wide to the sides, hips level with the shoulders.",
 "Hold the line. A band under the hips lets you train the full shape earlier."]},
"Planche|Full planche":{m:"planche",do:[
 "Lean the shoulders forward, protract hard, arms completely locked.",
 "Bring the legs together so the whole body is one horizontal line above the hands.",
 "Hold. Keep sessions short and fresh — never grind this one to failure."]},

"Front Lever|Tuck front lever":{m:"frontlever",do:[
 "Hang from the bar, arms straight, then pull the knees to the chest.",
 "Push the bar toward your feet with straight arms until the back is parallel to the floor.",
 "Hold with a rounded lower back and the pelvis tucked, shoulders pulled down."]},
"Front Lever|Advanced tuck front lever":{m:"frontlever",do:[
 "Start in a tuck front lever with the arms locked.",
 "Open the hips to 90° so the back goes flat, knees still tucked in.",
 "Hold the flat back — if it sags after five seconds, go back a step."]},
"Front Lever|One-leg front lever":{m:"frontlever",do:[
 "From the advanced tuck, extend one leg straight out.",
 "Keep the hips square and level; the tucked side wants to drop.",
 "Hold, then swap legs. Alternate the extended leg every set."]},
"Front Lever|Straddle front lever":{m:"frontlever",do:[
 "Straight arms, shoulders pulled down, body horizontal under the bar.",
 "Extend both legs straight and push them actively apart into a wide straddle.",
 "Hold the horizontal line — the chest must not drop below the hips."]},
"Front Lever|Full front lever":{m:"frontlever",do:[
 "Pull into position with straight arms, body flat and face up under the bar.",
 "Bring the legs together, squeezing glutes, quads and toes.",
 "Hold. Negatives from an inverted hang build the last part of the range."]},

"Back Lever|German hang":{m:"skincat",do:[
 "Hang from rings or a bar and tuck through into a skin the cat.",
 "Let the body extend slowly until you hang with the arms behind you and the chest facing forward.",
 "Relax and breathe. Come out the same controlled way you went in."]},
"Back Lever|Tuck back lever":{m:"backlever",do:[
 "Roll through an inverted hang until you are face down under the bar, knees tucked.",
 "Hold with the arms locked but not jammed straight, chest proud, eyes on the floor.",
 "Come out under control — never drop out of the position."]},
"Back Lever|Advanced tuck back lever":{m:"backlever",do:[
 "From the tuck back lever, open the hips so the torso and thighs form a straight line.",
 "Keep the knees tucked and the body flat, not folded.",
 "Hold. Progress by opening the hips further, not by dropping the hips."]},
"Back Lever|Straddle back lever":{m:"backlever",do:[
 "Roll into position face down, arms locked, shoulder blades squeezed.",
 "Extend the legs wide to the sides and level the whole body with the floor.",
 "Hold, then come out slowly. The rushed exit is where elbows get hurt."]},
"Back Lever|Full back lever":{m:"backlever",do:[
 "Lower slowly from an inverted hang, arms straight, body face down.",
 "Bring the legs together into one flat line, glutes and quads tight.",
 "Hold for a few seconds and exit under control. Stop at any elbow pain."]},

"Human Flag|Clutch flag":{m:"flag",do:[
 "Wedge the pole into the crease of one elbow and against the chest, other hand gripping below.",
 "Lift the feet and let the body come out sideways from the pole.",
 "Hold with the legs tucked or straight. A much friendlier introduction than the full grip."]},
"Human Flag|Support setup and vertical flag":{m:"flag",do:[
 "Top hand high on the pole in an overhand grip, bottom hand low, hands about shoulder-width apart.",
 "Press the bottom arm straight and pull with the top arm — think of bending the pole.",
 "Kick the hips and feet up so the body is vertical against the pole. Hold."]},
"Human Flag|Tuck flag":{m:"flag",do:[
 "Start in the vertical flag with the bottom arm locked straight.",
 "Lower slowly from vertical toward horizontal with the knees tucked to the chest.",
 "Hold, then return upward. Lowering is much easier than lifting into it."]},
"Human Flag|One-leg flag":{m:"flag",do:[
 "Lower from vertical with one leg extended and the other tucked.",
 "Keep the body in one plane — no rolling back away from the pole.",
 "Hold, then swap sides. Always train both sides."]},
"Human Flag|Straddle flag":{m:"flag",do:[
 "Set the grip, bottom arm locked, top arm pulling hard.",
 "Come out sideways with the legs wide and straight, body horizontal.",
 "Squeeze everything — the flag punishes any slack."]},
"Human Flag|Full flag":{m:"flag",do:[
 "Set up, press and pull, and come out to horizontal.",
 "Bring the legs together into one clean line from hands to toes.",
 "Hold without twisting toward the pole."]},

"L-sit → V-sit → Manna|Support hold with tuck":{m:"lsit",do:[
 "Sit between parallettes or on the floor, hands flat, arms locked.",
 "Push the ground down and pull the shoulders away from the ears until the hips lift.",
 "Tuck the knees and hold. Parallettes are much kinder to the wrists."]},
"L-sit → V-sit → Manna|One-leg L-sit":{m:"lsit",do:[
 "Press into a support hold with the shoulders depressed.",
 "Extend one leg straight out to horizontal, the other tucked.",
 "Hold with the hips level, toes pointed, then swap sides."]},
"L-sit → V-sit → Manna|L-sit":{m:"lsit",do:[
 "Press up into support, shoulders down first, chest tall.",
 "Lift both straight legs to horizontal, knees locked and toes pointed.",
 "Hold. Tight hamstrings limit this more often than weak abs."]},
"L-sit → V-sit → Manna|V-sit":{m:"lsit",do:[
 "From a solid L-sit, lean the shoulders slightly back and press down hard.",
 "Lift the straight legs above parallel toward the chest.",
 "Hold. Train the straddle version first, legs together after."]},
"L-sit → V-sit → Manna|Manna":{m:"lsit",do:[
 "Press into support with the shoulders pushed into deep extension behind you.",
 "Slide the hips behind the hands and lift the legs up toward the face.",
 "Hold. Most of the training here is mobility, not strength."]},
"Swinging &amp; Bar Basics|Passive swing":{m:"swing",do:[
 "Hang from the bar with a relaxed grip and let the body settle.",
 "Start a small swing from the shoulders rather than by kicking the legs.",
 "Practise stopping the swing dead — control matters more than height."]},
"Swinging &amp; Bar Basics|Tap swing (active swing)":{m:"swing",do:[
 "Hang with straight arms and an active shoulder position.",
 "Swap sharply between two shapes: hollow at the front, arch at the back, switching under the bar.",
 "Keep the arms straight — the power comes from the shoulders and midsection."]},
"Swinging &amp; Bar Basics|Kip / knee raise swing":{m:"swing",do:[
 "Build a controlled tap swing first.",
 "At the front of the swing, drive the knees up sharply and push the bar down.",
 "Ride the momentum. The kip should feel light and well timed, not violent."]},
"Swinging &amp; Bar Basics|Hip pullover":{m:"muscleup",do:[
 "Hang with a small swing, or start with a jump for assistance.",
 "Pull the bar toward the hips and lead with the hips, not the head, rolling backwards over the bar.",
 "Finish in a support position on top with the arms straight."]},
"Swinging &amp; Bar Basics|Back hip circle":{m:"muscleup",do:[
 "Start in a support hold on top of the bar, hips against it.",
 "Cast slightly, then circle backwards keeping the hips glued to the bar the whole way.",
 "Shift the hands around the bar as you rotate so you finish in a strong support."]},
"Swinging &amp; Bar Basics|Controlled dismount":{m:"swing",do:[
 "Build a small, controlled tap swing.",
 "Release at the front of the swing when the body is in line, feet leading.",
 "Land with soft knees and hips, eyes forward. Practise small before big."]},

"Muscle-Up|Strict chest-to-bar pull-up":{m:"pullup",do:[
 "Hang with straight arms and a slight lean back.",
 "Pull the bar toward the sternum, driving the elbows down and back.",
 "Touch the chest to the bar. If the chest cannot reach it, the transition will not happen."]},
"Muscle-Up|Straight-bar dip":{m:"dip",do:[
 "Get into support on top of a single bar, chest leaning slightly over it.",
 "Lower until the upper arms are at least parallel to the floor.",
 "Press back to lockout, keeping the lean so you stay balanced over the bar."]},
"Muscle-Up|Explosive high pull":{m:"pullup",do:[
 "Hang with an active shoulder position and a slight lean back.",
 "Pull as fast as you can, aiming to bring the bar to the sternum or lower ribs.",
 "Hold the top for a beat, then lower under control."]},
"Muscle-Up|Transition drills":{m:"muscleup",do:[
 "Use a band under the feet, or start from a bar you can reach standing.",
 "Pull high, then lean the chest forward over the bar early and roll the shoulders through.",
 "Practise the same movement as a slow negative from support back down to the hang."]},
"Muscle-Up|Strict bar muscle-up":{m:"muscleup",do:[
 "Hang with a false grip if you can — wrists over the bar.",
 "Pull explosively to the sternum, then lean the chest forward over the bar without hesitating.",
 "Press out of the bottom of the dip to a straight-arm support on top."]},

"Ring Muscle-Up|False-grip hang and pull":{m:"hang",do:[
 "Set the wrists on top of the rings with the hands cocked over, then take the weight.",
 "Hang and hold the grip without letting the wrists roll off.",
 "Add pull-ups keeping the false grip. Build tolerance slowly — the wrists adapt last."]},
"Ring Muscle-Up|Ring dips with turnout":{m:"dip",do:[
 "Get into a ring support with the rings turned out and pressed into the hips.",
 "Lower with the rings tight to the ribs, elbows back.",
 "Press back up and turn the rings out again at the top."]},
"Ring Muscle-Up|Explosive false-grip pull":{m:"pullup",do:[
 "Hang from the rings in a false grip, shoulders active.",
 "Pull the rings down to sternum height, keeping the elbows in, not flared.",
 "Hold the top briefly, then lower with control."]},
"Ring Muscle-Up|Transition work":{m:"muscleup",do:[
 "Set the rings low enough that your feet can reach the floor.",
 "Pull high and roll the shoulders forward over the rings, keeping them tight to the ribs.",
 "Practise slow negatives back through the same catch position."]},
"Ring Muscle-Up|Strict ring muscle-up":{m:"muscleup",do:[
 "Hang in a false grip, legs still, shoulders active.",
 "Pull the rings to the chest, then roll the shoulders over them in one movement.",
 "Press out to a turned-out support at the top. No swing, both arms together."]},

"Bar Tricks &amp; Freestyle|Ice cream maker":{m:"skincat",do:[
 "Pull up into an inverted hang with the knees tucked and the arms straight.",
 "Roll out slowly toward a front lever position, keeping the arms locked.",
 "Pull back to inverted under control. Start tucked and open the legs over time."]},
"Bar Tricks &amp; Freestyle|Kipping muscle-up":{m:"muscleup",do:[
 "Build a controlled tap swing on the bar.",
 "At the front of the swing, kip the knees and pull, then lean the chest over the bar.",
 "Press out to support. Learn a near-strict version first so the shoulders can take the catch."]},
"Bar Tricks &amp; Freestyle|360 bar spin":{m:"swing",do:[
 "Start from a small controlled swing with a strong grip.",
 "Release and turn, spotting the bar with your eyes the whole way around.",
 "Re-catch with both hands. Build it in quarters, then halves, then the full turn."]},
"Bar Tricks &amp; Freestyle|Shrimp flip / bar flip":{m:"muscleup",do:[
 "Learn the pullover and back hip circle first — they teach the rotation safely.",
 "From a swing, drive the hips over the bar and rotate around it.",
 "Catch in a hang or support. Use a low bar and a spotter for the first attempts."]},
"Bar Tricks &amp; Freestyle|Hefesto (reverse muscle-up)":{m:"backlever",do:[
 "Lower into a back lever position under the bar with an underhand grip.",
 "Pull with the biceps and lats to bring the body up behind the bar.",
 "Finish in support behind the bar. Use band assistance for months — the bicep tendon decides the timeline."]},

"Rings &amp; the Cross|Ring support hold":{m:"dip",do:[
 "Jump or press into support on the rings, arms locked.",
 "Turn the rings out until the thumbs point forward and press them into the hips.",
 "Hold. If the rings shake, do more short sets rather than one long ugly one."]},
"Rings &amp; the Cross|Ring row and ring push-up":{m:"row",do:[
 "Set the rings low. For rows, hang underneath; for push-ups, take a plank position holding them.",
 "Keep the body in one plank line and perform the rep with the rings close to the body.",
 "Turn the rings out at the end of every rep."]},
"Rings &amp; the Cross|Ring dip and ring L-sit":{m:"dip",do:[
 "Start from a turned-out ring support hold.",
 "For dips, lower with the rings at the ribs and press back to a turned-out lockout.",
 "For the L-sit, lift the straight legs to horizontal and hold, shoulders pressed down."]},
"Rings &amp; the Cross|Ring back lever and skin the cat":{m:"skincat",do:[
 "Hang from the rings and tuck through into an inverted position.",
 "Lower slowly, letting the rings rotate naturally with the shoulders.",
 "Hold the tuck back lever, then roll back up. Never drop into the position."]},
"Rings &amp; the Cross|Iron cross progressions":{m:"dip",do:[
 "Use a band, a cross machine or a partner for support in a ring support hold.",
 "Let the arms travel out to the sides only as far as you can control, elbows locked.",
 "Pull back to support. Build the tendons over years, not months."]},

"One-Arm Pull-Up|Heavy weighted pull-ups":{m:"pullup",do:[
 "Load a belt or vest with serious weight — half your bodyweight is the target here.",
 "Perform full-range strict pull-ups, dead hang to chin over bar.",
 "Add load slowly. The elbows adapt far more slowly than the muscles."]},
"One-Arm Pull-Up|Archer pull-ups":{m:"pullup",do:[
 "Take a wide grip on the bar.",
 "Pull toward one hand while the other arm stays long and straight along the bar.",
 "Lower with control and alternate sides, paying attention to the weaker one."]},
"One-Arm Pull-Up|Assisted one-arm":{m:"pullup",do:[
 "Hang a towel over the bar, or use a band, for the assisting hand.",
 "Pull with one arm while the assisting hand takes as little as possible.",
 "Move the assisting hand lower down the towel over the weeks. Keep the body from twisting."]},
"One-Arm Pull-Up|One-arm negatives":{m:"pullup",do:[
 "Jump or climb up so the chin starts above the bar with one hand on it.",
 "Lower over five seconds, resisting the whole way to straight arm.",
 "Two or three sets only. Stop the moment the tempo breaks."]},
"One-Arm Pull-Up|One-arm pull-up":{m:"pullup",do:[
 "Hang from one arm with the shoulder active and the body still.",
 "Pull up to chin over bar. A little body rotation is normal, a swing is not.",
 "Lower under control. Train fresh, low volume, and never through elbow pain."]}
};

const el = (t,c,h)=>{const e=document.createElement(t); if(c)e.className=c; if(h!=null)e.innerHTML=h; return e;};

const DUMBBELL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3.5 9.5v5M6.5 6.5v11M17.5 6.5v11M20.5 9.5v5M6.5 12h11"/></svg>';

const ANAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h5.5A4.5 4.5 0 0 1 16 8.5c0 1.5 1 2.1 2 2.9 1.3 1 2 2.4 2 4.1V20H8.5C5.5 20 3.5 18 3.5 15c0-2 .9-3.4 2.5-4.6V4z"/><path d="M8 12.5c1.7 0 2.9 1 3.4 2.4"/></svg>';

/* ---------------- Muscle map ----------------
   Every shape carries data-m (a region id) and data-label (what to show
   when you hover or tap it). Regions light up from each exercise's
   primary / secondary lists through MUSCLE_MAP below. */

const SIL = '<g class="sil">'
+ '<circle cx="60" cy="20" r="12"/><rect x="54" y="28" width="12" height="12"/>'
+ '<path d="M40,46 C40,39 48,37 60,37 C72,37 80,39 80,46 L80,80 L76,110 L72,126 L48,126 L44,110 L40,80 Z"/>'
+ '<circle cx="36" cy="50" r="10"/><circle cx="84" cy="50" r="10"/>'
+ '<rect x="27" y="52" width="12" height="46" rx="6"/><rect x="81" y="52" width="12" height="46" rx="6"/>'
+ '<rect x="24" y="94" width="11" height="40" rx="5.5"/><rect x="85" y="94" width="11" height="40" rx="5.5"/>'
+ '<ellipse cx="29.5" cy="138" rx="5.5" ry="6.5"/><ellipse cx="90.5" cy="138" rx="5.5" ry="6.5"/>'
+ '<rect x="44" y="122" width="15" height="64" rx="7"/><rect x="61" y="122" width="15" height="64" rx="7"/>'
+ '<rect x="46" y="182" width="12" height="54" rx="6"/><rect x="62" y="182" width="12" height="54" rx="6"/>'
+ '<ellipse cx="52" cy="240" rx="7" ry="4.5"/><ellipse cx="68" cy="240" rx="7" ry="4.5"/>'
+ '</g>';

const E=(a,c)=>({t:"ellipse",a:a,c:c}), R=(a,c)=>({t:"rect",a:a,c:c}),
      C=(a,c)=>({t:"circle",a:a,c:c}), P=(a,c)=>({t:"path",a:a,c:c});

function reg(m,label,shapes){
  return shapes.map(s=>'<'+s.t+' class="reg'+(s.c?" "+s.c:"")+'" data-m="'+m+'" data-label="'+label+'" '+s.a+'></'+s.t+'>').join("");
}

const FRONT = SIL
+ reg("delt-ant","Anterior deltoid — front of the shoulder",[C('cx="36" cy="50" r="7.5"'),C('cx="84" cy="50" r="7.5"')])
+ reg("pec","Pectoralis major — chest",[E('cx="52.5" cy="59" rx="7" ry="9.5"'),E('cx="67.5" cy="59" rx="7" ry="9.5"')])
+ reg("serratus","Serratus anterior — the finger-like muscle over the ribs",[E('cx="45.5" cy="72" rx="3.4" ry="1.9"'),E('cx="45.5" cy="79" rx="3.4" ry="1.9"'),E('cx="74.5" cy="72" rx="3.4" ry="1.9"'),E('cx="74.5" cy="79" rx="3.4" ry="1.9"')])
+ reg("tva","Transverse abdominis — the deep corset under the abs",[E('cx="60" cy="94" rx="13.5" ry="19"',"tva")])
+ reg("abs","Rectus abdominis — the front of the trunk",[R('x="52" y="70" width="16" height="44" rx="5"')])
+ reg("obliques","Obliques — the sides of the waist",[E('cx="47" cy="90" rx="4" ry="15"'),E('cx="73" cy="90" rx="4" ry="15"')])
+ reg("biceps","Biceps and brachialis — front of the upper arm",[E('cx="33" cy="68" rx="5" ry="13"'),E('cx="87" cy="68" rx="5" ry="13"')])
+ reg("forearm-f","Forearm and wrist flexors — the gripping side",[E('cx="29.5" cy="110" rx="4.5" ry="15"'),E('cx="90.5" cy="110" rx="4.5" ry="15"')])
+ reg("grip","Grip — hand and finger flexors",[E('cx="29.5" cy="138" rx="4.5" ry="5.5"'),E('cx="90.5" cy="138" rx="4.5" ry="5.5"')])
+ reg("hipflex","Hip flexors (iliopsoas) — lift the legs",[E('cx="54" cy="120" rx="5" ry="7"'),E('cx="66" cy="120" rx="5" ry="7"')])
+ reg("quad","Quadriceps — front of the thigh",[E('cx="51" cy="152" rx="6.5" ry="26"'),E('cx="69" cy="152" rx="6.5" ry="26"')])
+ reg("adductor","Adductors — inner thigh",[E('cx="57" cy="146" rx="2.8" ry="18"'),E('cx="63" cy="146" rx="2.8" ry="18"')])
+ reg("tibialis","Tibialis anterior — front of the shin",[E('cx="50" cy="206" rx="3.2" ry="18"'),E('cx="70" cy="206" rx="3.2" ry="18"')]);

const BACK = SIL
+ reg("delt-post","Posterior deltoid — back of the shoulder",[C('cx="36" cy="50" r="8"'),C('cx="84" cy="50" r="8"')])
+ reg("trap-up","Upper trapezius — neck to shoulder",[P('d="M60,38 L44,52 L52,66 L60,60 L68,66 L76,52 Z"')])
+ reg("trap-mid","Mid trapezius — between the shoulder blades",[R('x="44" y="62" width="8" height="14" rx="2"'),R('x="68" y="62" width="8" height="14" rx="2"')])
+ reg("rhomboid","Rhomboids — pull the shoulder blades together",[R('x="53" y="58" width="6" height="14" rx="2"'),R('x="61" y="58" width="6" height="14" rx="2"')])
+ reg("trap-low","Lower trapezius — pulls the shoulder blades down",[P('d="M53,77 L67,77 L60,96 Z"')])
+ reg("lat","Latissimus dorsi — the big pulling muscle of the back",[P('d="M41,57 C37,77 42,98 51,108 L57,102 C49,88 47,72 49,59 Z"'),P('d="M79,57 C83,77 78,98 69,108 L63,102 C71,88 73,72 71,59 Z"')])
+ reg("teres","Teres major — the lat’s small helper under the armpit",[E('cx="46" cy="60" rx="4.5" ry="3.5"'),E('cx="74" cy="60" rx="4.5" ry="3.5"')])
+ reg("cuff","Rotator cuff — deep shoulder stabilisers",[C('cx="42" cy="52" r="4"',"cuff"),C('cx="78" cy="52" r="4"',"cuff")])
+ reg("erector","Erector spinae — the columns along the spine",[R('x="56" y="94" width="3.5" height="24" rx="1.7"'),R('x="60.5" y="94" width="3.5" height="24" rx="1.7"')])
+ reg("ql","Quadratus lumborum — deep side of the lower back",[R('x="49" y="102" width="5.5" height="15" rx="2"'),R('x="65.5" y="102" width="5.5" height="15" rx="2"')])
+ reg("triceps","Triceps — back of the upper arm",[E('cx="33" cy="70" rx="5" ry="14"'),E('cx="87" cy="70" rx="5" ry="14"')])
+ reg("forearm-e","Forearm and wrist extensors — the back of the forearm",[E('cx="29.5" cy="110" rx="4.5" ry="15"'),E('cx="90.5" cy="110" rx="4.5" ry="15"')])
+ reg("grip","Grip — hand and finger flexors",[E('cx="29.5" cy="138" rx="4.5" ry="5.5"'),E('cx="90.5" cy="138" rx="4.5" ry="5.5"')])
+ reg("glute-med","Gluteus medius — side of the hip",[E('cx="44" cy="126" rx="4.5" ry="6"'),E('cx="76" cy="126" rx="4.5" ry="6"')])
+ reg("glute-max","Gluteus maximus — the glutes",[E('cx="52" cy="134" rx="8.5" ry="11"'),E('cx="68" cy="134" rx="8.5" ry="11"')])
+ reg("hamstring","Hamstrings — back of the thigh",[E('cx="51" cy="166" rx="6.5" ry="20"'),E('cx="69" cy="166" rx="6.5" ry="20"')])
+ reg("calf","Calves — gastrocnemius and soleus",[E('cx="51" cy="202" rx="5" ry="16"'),E('cx="69" cy="202" rx="5" ry="16"')]);

const BODY_SVG =
  '<svg class="mm" viewBox="0 0 290 266" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Muscle map, front and back view">'
  + "<g>" + FRONT + "</g>"
  + '<g transform="translate(170,0)">' + BACK + "</g>"
  + '<text class="lbl" x="60" y="262" text-anchor="middle">Front</text>'
  + '<text class="lbl" x="230" y="262" text-anchor="middle">Back</text>'
  + "</svg>";

/* muscle name as written in the data → regions on the map */
const MUSCLE_MAP = {
  "adductors":["adductor"],
  "anterior deltoid":["delt-ant"],
  "biceps":["biceps"], "biceps brachii":["biceps"], "brachialis":["biceps"],
  "brachioradialis":["forearm-f"],
  "calves":["calf"],
  "core":["abs","obliques","tva"],
  "deltoids":["delt-ant","delt-post"],
  "elbow tendons":["biceps","forearm-f"],
  "erector spinae":["erector"],
  "finger flexors":["grip","forearm-f"],
  "forearm flexors":["forearm-f","grip"],
  "glutes":["glute-max"], "gluteus maximus":["glute-max"], "gluteus medius":["glute-med"],
  "grip":["grip","forearm-f"],
  "hamstrings":["hamstring"], "hamstring flexibility":["hamstring"],
  "hip flexors":["hipflex"],
  "latissimus dorsi":["lat"],
  "legs":["quad","glute-max","calf"],
  "lower trapezius":["trap-low"], "mid trapezius":["trap-mid"],
  "upper trapezius":["trap-up"], "trapezius":["trap-up"],
  "obliques":["obliques"],
  "pectoralis major":["pec"],
  "quadratus lumborum":["ql"],
  "quadriceps":["quad"], "quadriceps flexibility":["quad"],
  "rear deltoid":["delt-post"],
  "rectus abdominis":["abs"],
  "rhomboids":["rhomboid"],
  "rotator cuff":["cuff"],
  "serratus anterior":["serratus"],
  "shoulder capsule":["cuff","delt-ant"],
  "shoulder extensors":["lat","delt-post","teres"],
  "shoulder flexors":["delt-ant"],
  "shoulder stabilisers":["cuff","trap-low","rhomboid"],
  "teres major":["teres"],
  "tibialis anterior":["tibialis"],
  "transverse abdominis":["tva"],
  "triceps":["triceps"],
  "wrist and finger flexors":["forearm-f","grip"],
  "wrist extensors":["forearm-e"],
  "wrist flexors":["forearm-f"]
};

/* where the little numbered badge sits for each region.
   v:0 = front figure, v:1 = back figure (shifted 170 to the right) */
const ANCHORS = {
  "delt-ant":{x:36,y:50,v:0}, "pec":{x:52.5,y:59,v:0}, "serratus":{x:45.5,y:75.5,v:0},
  "abs":{x:60,y:86,v:0}, "tva":{x:60,y:110,v:0}, "obliques":{x:47,y:90,v:0},
  "biceps":{x:33,y:68,v:0}, "forearm-f":{x:29.5,y:110,v:0}, "grip":{x:29.5,y:138,v:0},
  "hipflex":{x:54,y:120,v:0}, "quad":{x:51,y:152,v:0}, "adductor":{x:60,y:168,v:0},
  "tibialis":{x:50,y:206,v:0},
  "delt-post":{x:36,y:50,v:1}, "trap-up":{x:60,y:50,v:1}, "trap-mid":{x:47,y:71,v:1},
  "rhomboid":{x:64,y:64,v:1}, "trap-low":{x:60,y:86,v:1}, "lat":{x:46,y:88,v:1},
  "teres":{x:44,y:57,v:1}, "cuff":{x:42,y:41,v:1}, "erector":{x:60,y:106,v:1},
  "ql":{x:49,y:110,v:1}, "triceps":{x:33,y:70,v:1}, "forearm-e":{x:90.5,y:110,v:1},
  "glute-med":{x:44,y:126,v:1}, "glute-max":{x:52,y:136,v:1},
  "hamstring":{x:51,y:166,v:1}, "calf":{x:51,y:202,v:1}
};

function regionsFor(name){
  const key = name.toLowerCase().replace(/\s*\(.*?\)\s*/g," ").replace(/\s+/g," ").trim();
  return MUSCLE_MAP[key] || [];
}

const CAP_DEFAULT = "Numbers match the list. Amber = prime movers, faded = also working. Tap a muscle to name it.";

function buildMap(host, step){
  host.innerHTML = BODY_SVG + '<p class="mm-cap">' + CAP_DEFAULT + "</p>";
  const svg = host.querySelector("svg");
  const cap = host.querySelector(".mm-cap");

  const paint = (list, cls)=> list.forEach(n=> regionsFor(n).forEach(r=>
    svg.querySelectorAll('[data-m="'+r+'"]').forEach(node=>{
      if(cls === "on2" && node.classList.contains("on")) return;
      node.classList.add(cls);
    })));
  paint(step.primary || [], "on");
  paint(step.secondary || [], "on2");

  // numbered badges — same numbers as the muscle list beside the map
  const nums = document.createElementNS("http://www.w3.org/2000/svg","g");
  nums.setAttribute("class","nums");
  const used = {}, numberOf = {}, placed = [];
  const all = (step.primary||[]).map(n=>({n:n,p:true})).concat((step.secondary||[]).map(n=>({n:n,p:false})));
  all.forEach((item,i)=>{
    regionsFor(item.n).forEach(r=>{
      if(!numberOf[r]) numberOf[r] = i+1;
      const a = ANCHORS[r];
      if(!a || used[r]) return;
      // one badge per muscle per area: skip a repeat sitting right next to its twin
      const near = placed.some(p=> p.n === i+1 && p.v === a.v &&
        Math.hypot(p.x - a.x, p.y - a.y) < 26);
      if(near) return;
      placed.push({n:i+1, x:a.x, y:a.y, v:a.v});
      used[r] = true;
      const g = document.createElementNS("http://www.w3.org/2000/svg","g");
      g.setAttribute("class","num" + (item.p ? "" : " num2"));
      g.setAttribute("transform","translate(" + (a.x + (a.v ? 170 : 0)) + "," + a.y + ")");
      g.innerHTML = '<circle r="6.4"></circle><text y="3.3" text-anchor="middle">' + (i+1) + "</text>";
      nums.append(g);
    });
  });
  svg.append(nums);

  const show = e=>{
    const t = e.target.closest("[data-label]");
    if(!t) return;
    const parts = t.dataset.label.split(" — ");
    const no = numberOf[t.dataset.m] ? numberOf[t.dataset.m] + ". " : "";
    const role = t.classList.contains("on") ? " Prime mover in this exercise."
               : t.classList.contains("on2") ? " Also working here." : "";
    cap.innerHTML = "<b>" + no + parts[0] + "</b>" + (parts[1] ? " — " + parts[1] + "." : "") + role;
  };
  svg.addEventListener("mouseover", show);
  svg.addEventListener("click", show);
  svg.addEventListener("mouseleave", ()=>{ cap.textContent = CAP_DEFAULT; });

  // hovering a muscle name flashes it on the map
  host.parentNode.querySelectorAll(".mus span[data-regions]").forEach(chip=>{
    const ids = chip.dataset.regions.split(" ").filter(Boolean);
    const set = add=> ids.forEach(r=> svg.querySelectorAll('[data-m="'+r+'"]')
      .forEach(n=> n.classList.toggle("flash", add)));
    chip.addEventListener("mouseenter", ()=> set(true));
    chip.addEventListener("mouseleave", ()=> set(false));
  });
}

function muscleRow(list, cls, start){
  const wrap = el("div","mus" + (cls ? " "+cls : ""));
  list.forEach((m,i)=>{
    const s = el("span",null,'<b class="n">' + ((start||0)+i+1) + "</b>" + m);
    const ids = regionsFor(m);
    if(ids.length){ s.dataset.regions = ids.join(" "); s.title = "Number " + ((start||0)+i+1) + " on the map"; }
    wrap.append(s);
  });
  return wrap;
}


/* ---------------- How it is done ----------------
   A small library of stick-figure movements. Each pose is
   [head, shoulder, elbow, wrist, hip, knee, foot] and optionally
   a second knee + foot for the free leg. The player eases between
   the poses in a loop. Props are drawn behind the figure. */

const FLOOR = '<line class="prop" x1="10" y1="134" x2="210" y2="134"/>';
const HIBAR = '<line class="prop" x1="40" y1="20" x2="180" y2="20"/><line class="prop2" x1="110" y1="20" x2="110" y2="8"/>';
const MIDBAR = '<line class="prop" x1="55" y1="34" x2="165" y2="34"/>';
const ROWBAR = '<line class="prop" x1="70" y1="64" x2="150" y2="64"/>';
const DIPBARS = '<line class="prop" x1="70" y1="62" x2="150" y2="62"/>';
const POLE = '<line class="prop" x1="60" y1="12" x2="60" y2="132"/>';
const BENCH = '<rect class="prop-fill" x="132" y="96" width="60" height="38"/>';
const PARALLETTES = '<line class="prop" x1="88" y1="110" x2="132" y2="110"/><line class="prop2" x1="92" y1="110" x2="92" y2="132"/><line class="prop2" x1="128" y1="110" x2="128" y2="132"/>';

const MOVES = {
  pushup:{label:"Push-up pattern", props:FLOOR, poses:[
    [158,88, 145,95, 149,113, 152,131, 88,107, 62,118, 38,128],
    [158,116, 145,121, 161,122, 152,131, 88,124, 62,129, 38,131]]},
  incline:{label:"Incline press", props:FLOOR+BENCH, poses:[
    [162,62, 149,70, 152,84, 156,98, 92,90, 64,108, 38,127],
    [162,86, 149,92, 164,96, 156,98, 92,106, 64,117, 38,130]]},
  pullup:{label:"Vertical pull", props:HIBAR, poses:[
    [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
    [102,18, 108,34, 128,36, 110,22, 114,70, 122,94, 126,114]]},
  row:{label:"Horizontal pull", props:FLOOR+ROWBAR, poses:[
    [124,80, 133,86, 121,75, 110,64, 170,108, 188,118, 206,128],
    [113,70, 121,77, 135,67, 110,64, 163,101, 183,114, 206,128]]},
  dip:{label:"Vertical press", props:DIPBARS, poses:[
    [103,26, 110,38, 110,50, 110,62, 112,70, 120,94, 110,114],
    [99,46, 106,56, 123,51, 110,62, 110,86, 117,110, 104,128]]},
  hang:{label:"Hang", props:HIBAR, poses:[
    [104,46, 110,56, 112,38, 110,22, 110,90, 111,112, 111,131],
    [104,41, 110,51, 112,35, 110,22, 110,85, 111,108, 111,128]]},
  legraise:{label:"Hanging raise", props:HIBAR, poses:[
    [104,46, 110,56, 112,38, 110,22, 110,90, 111,112, 111,131],
    [102,48, 108,58, 111,39, 110,22, 106,86, 128,74, 150,68]]},
  swing:{label:"Swing", props:HIBAR, poses:[
    [99,44, 106,54, 110,37, 110,22, 119,86, 129,108, 137,126],
    [113,44, 115,54, 112,37, 110,22, 98,84, 84,104, 74,120]]},
  muscleup:{label:"Pull to support", props:MIDBAR, poses:[
    [105,58, 110,68, 113,52, 110,36, 110,98, 114,119, 116,136],
    [120,32, 117,45, 129,41, 110,36, 108,78, 116,99, 122,119],
    [107,14, 110,27, 112,33, 110,36, 112,62, 117,86, 112,108]]},
  handstand:{label:"Handstand", props:FLOOR, poses:[
    [103,120, 110,107, 110,120, 110,132, 110,72, 110,45, 110,20],
    [103,120, 108,107, 109,120, 110,132, 112,72, 113,45, 114,20]]},
  hspu:{label:"Vertical press, inverted", props:FLOOR, poses:[
    [102,117, 110,104, 110,118, 110,132, 110,70, 110,44, 110,20],
    [97,127, 108,124, 123,127, 110,132, 110,92, 110,64, 110,38]]},
  pike:{label:"Pike press", props:FLOOR, poses:[
    [156,104, 143,100, 147,116, 151,132, 100,60, 80,96, 62,132],
    [160,122, 145,119, 160,126, 151,132, 100,64, 80,98, 62,132]]},
  planche:{label:"Straight-arm hold", props:FLOOR, poses:[
    [128,96, 112,100, 111,116, 110,132, 72,100, 48,100, 26,100],
    [128,100, 112,104, 111,118, 110,132, 72,104, 48,104, 26,104]]},
  frontlever:{label:"Front lever", props:MIDBAR, poses:[
    [96,58, 112,62, 111,49, 110,36, 152,64, 176,64, 198,64],
    [96,62, 112,66, 111,51, 110,36, 152,68, 176,68, 198,68]]},
  backlever:{label:"Back lever", props:MIDBAR, poses:[
    [96,70, 107,64, 108,50, 110,36, 146,66, 172,66, 196,66],
    [96,74, 107,68, 108,52, 110,36, 146,70, 172,70, 196,70]]},
  skincat:{label:"Roll through", props:MIDBAR, poses:[
    [104,54, 110,62, 111,49, 110,36, 110,92, 110,114, 110,132],
    [104,78, 110,66, 111,51, 110,36, 110,48, 110,30, 110,14]]},
  lsit:{label:"Support and compress", props:PARALLETTES, poses:[
    [104,68, 110,80, 110,95, 110,110, 112,110, 140,108, 166,106],
    [104,64, 110,76, 110,93, 110,110, 112,106, 140,104, 166,102]]},
  squat:{label:"Squat", props:FLOOR, poses:[
    [110,32, 110,46, 113,62, 116,78, 110,84, 108,108, 106,132, 114,108, 116,132],
    [102,58, 105,72, 118,80, 131,85, 98,102, 118,112, 106,132, 124,110, 118,132]]},
  lunge:{label:"Split squat", props:FLOOR, poses:[
    [104,32, 104,46, 108,62, 112,76, 104,84, 86,108, 74,132, 126,110, 138,132],
    [100,52, 100,66, 106,80, 112,92, 100,100, 84,116, 74,132, 124,128, 140,132]]},
  pistol:{label:"Single-leg squat", props:FLOOR, poses:[
    [110,30, 110,44, 122,56, 134,62, 110,82, 108,107, 106,132, 128,96, 150,92],
    [98,66, 100,80, 116,82, 132,82, 94,110, 100,124, 106,132, 128,104, 152,102]]},
  bridge:{label:"Hip bridge", props:FLOOR, poses:[
    [56,124, 72,124, 68,131, 62,133, 112,126, 140,112, 160,132],
    [56,124, 72,124, 68,131, 62,133, 112,100, 140,100, 160,132]]},
  nordic:{label:"Hamstring lower", props:FLOOR, poses:[
    [104,52, 106,66, 110,82, 114,96, 106,100, 108,126, 132,132],
    [64,86, 76,92, 70,110, 64,126, 100,104, 108,126, 132,132]]},
  flag:{label:"Side hold", props:POLE, poses:[
    [86,54, 88,64, 74,58, 60,52, 130,64, 156,64, 180,64],
    [86,58, 88,68, 74,62, 60,52, 130,68, 156,68, 180,68]]},
  crow:{label:"Arm balance", props:FLOOR, poses:[
    [128,98, 112,102, 112,117, 110,132, 88,102, 106,112, 88,122],
    [128,101, 112,105, 112,119, 110,132, 88,105, 106,115, 88,125]]},
  elbowlever:{label:"Elbow lever", props:FLOOR, poses:[
    [128,102, 106,104, 112,118, 110,132, 86,104, 64,104, 44,104],
    [128,105, 106,107, 112,120, 110,132, 86,107, 64,107, 44,107]]},
  dragonflag:{label:"Dragon flag", props:FLOOR+BENCH, poses:[
    [170,116, 152,116, 168,106, 178,100, 120,88, 96,64, 76,44],
    [170,116, 152,116, 168,106, 178,100, 122,112, 100,108, 80,104]]}
};

const FIG_SVG =
  '<svg class="fig" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
  + '<g class="props"></g>'
  + '<g class="body">'
  + '<line class="limb l2" data-j="p,k2"/><line class="limb l2" data-j="k2,f2"/>'
  + '<line class="limb l2" data-j="s,e2"/><line class="limb l2" data-j="e2,w2"/>'
  + '<line class="limb torso" data-j="s,p"/>'
  + '<line class="limb" data-j="p,k"/><line class="limb" data-j="k,f"/>'
  + '<line class="limb" data-j="s,e"/><line class="limb" data-j="e,w"/>'
  + '<circle class="head" r="9"/>'
  + "</g></svg>";

const players = [];
function playerLoop(now){
  players.forEach(p=>{
    if(!p.svg.isConnected || !p.host.offsetParent) return;
    if(p.three){ p.tick(now); return; }
    const poses = p.move.poses, n = poses.length;
    const cycle = 2600 * (n - 1);
    let t = ((now % cycle) / cycle) * 2;           // 0..2 ping-pong
    if(t > 1) t = 2 - t;
    const pos = t * (n - 1);
    const i = Math.min(n - 2, Math.floor(pos));
    let f = pos - i;
    f = f * f * (3 - 2 * f);                        // ease
    drawPose(p, poses[i], poses[i+1], f);
  });
  requestAnimationFrame(playerLoop);
}
requestAnimationFrame(playerLoop);

const JOINTS = ["h","s","e","w","p","k","f","k2","f2","e2","w2"];
function drawPose(p, a, b, f){
  const pt = {};
  JOINTS.forEach((j,idx)=>{
    const ax = a[idx*2], ay = a[idx*2+1];
    if(ax === undefined || ax === null) return;
    const bx = (b[idx*2] === undefined || b[idx*2] === null ? ax : b[idx*2]);
    const by = (b[idx*2+1] === undefined || b[idx*2+1] === null ? ay : b[idx*2+1]);
    pt[j] = [ax + (bx - ax) * f, ay + (by - ay) * f];
  });
  p.lines.forEach(ln=>{
    const j = ln.dataset.j.split(",");
    if(!pt[j[0]] || !pt[j[1]]){ ln.style.display = "none"; return; }
    ln.style.display = "";
    ln.setAttribute("x1", pt[j[0]][0]); ln.setAttribute("y1", pt[j[0]][1]);
    ln.setAttribute("x2", pt[j[1]][0]); ln.setAttribute("y2", pt[j[1]][1]);
  });
  p.head.setAttribute("cx", pt.h[0]); p.head.setAttribute("cy", pt.h[1]);
}

function buildHow(host, step, track, prevStep, nextStep){
  const key = track.name + "|" + step.name;
  const info = HOWTO[key];
  const move = EXMOVE[key] || (info && MOVES[info.m]);
  let html = "";
  if(move){
    html += '<div class="figwrap">' + FIG_SVG + '<p class="fig-cap">' + move.label + "</p></div>";
  }
  html += '<div class="how-text"><ol class="steps">'
    + (info ? info.do : step.cues).map(x=>"<li>" + x + "</li>").join("")
    + "</ol>";
  if(prevStep || nextStep){
    html += '<p class="scale">'
      + (prevStep ? "<span><b>Too hard?</b> Go back to " + prevStep + ".</span>" : "")
      + (nextStep ? "<span><b>Too easy?</b> Move up to " + nextStep + ".</span>" : "")
      + "</p>";
  }
  html += '<a class="vid" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query='
    + encodeURIComponent(step.name + " calisthenics tutorial") + '">Watch demos ↗</a>';
  html += "</div>";
  host.innerHTML = html;

  if(move) mountFigure(host, move);

  // a 3D view for the exercises where the side profile hides the point
  const fw = host.querySelector(".figwrap");
  if(fw && RIG3D[key]){
    const btn = document.createElement("button");
    btn.className = "d3btn"; btn.type = "button"; btn.textContent = "3D";
    btn.title = "Rotate the movement";
    let built = false;
    btn.addEventListener("click", ()=>{
      if(!built){ make3D(fw, key, move ? move.label : ""); built = true; }
      const on = fw.classList.toggle("show3d");
      btn.textContent = on ? "2D" : "3D";
    });
    fw.append(btn);
  }
}

function mountFigure(host, move){
  const svg = host.querySelector("svg.fig");
  if(!svg) return;
  svg.querySelector(".props").innerHTML = move.props;
  players.push({
    svg: svg, host: host, move: move,
    lines: [...svg.querySelectorAll(".limb")],
    head: svg.querySelector(".head")
  });
}

/* ---- the expandable "advanced version" chips ---- */
function extraKey(name){
  return name.toLowerCase().replace(/\s+/g," ").trim().replace(/s$/,"");
}
function buildExtra(host, name){
  const k = extraKey(name);
  const info = EXTRAS[k] || EXTRAS2[k];
  const move = info && MOVES[info.m];
  let html = "";
  if(move) html += '<div class="figwrap small">' + FIG_SVG + '<p class="fig-cap">' + move.label + "</p></div>";
  html += '<div class="how-text"><p class="chipx-desc">'
    + (info ? info.d : "No notes written for this one yet — add a line for it in the EXTRAS block near the bottom of the file.")
    + "</p>";
  const target = LADDER_INDEX[name.toLowerCase().trim()] || LADDER_INDEX[k];
  if(target){
    html += '<p class="chipx-link"><a href="#" data-goto="' + target.id + '">Open the full ladder entry in '
      + target.track + " ↓</a></p>";
  }
  html += '<a class="vid" target="_blank" rel="noopener" href="https://www.youtube.com/results?search_query='
    + encodeURIComponent(name + " calisthenics tutorial") + '">Watch demos ↗</a></div>';
  host.innerHTML = html;
  if(move) mountFigure(host, move);


  const jump = host.querySelector("[data-goto]");
  if(jump) jump.addEventListener("click", e=>{
    e.preventDefault();
    const li = document.getElementById(jump.dataset.goto);
    if(!li) return;
    let n = li.parentNode;
    while(n && n !== document.body){
      if(n.tagName === "DETAILS") n.open = true;
      n = n.parentNode;
    }
    li.querySelector("details.step").open = true;
    li.scrollIntoView({behavior:"smooth", block:"center"});
  });
}

/* ================= Per-exercise animations =================
   One entry per rung, keyed exactly like HOWTO ("Track|Exercise").
   Joint order: head, shoulder, elbow, wrist, hip, knee, foot,
   then optional second knee + foot, then optional second elbow + wrist.
   hold(p)   = a static position with a small breathing motion
   reps(a,b) = two positions the player eases between        */

const BOX_R = '<rect class="prop-fill" x="140" y="96" width="62" height="38"/>';
const BOX_L = '<rect class="prop-fill" x="18" y="104" width="52" height="30"/>';
const BOX_LOW = '<rect class="prop-fill" x="128" y="112" width="60" height="22"/>';
const BENCH_R = '<rect class="prop-fill" x="132" y="96" width="64" height="38"/>';
const ROWBAR_HI = '<line class="prop" x1="70" y1="88" x2="160" y2="88"/>';
const ROWBAR_LO = '<line class="prop" x1="70" y1="64" x2="160" y2="64"/>';
const RINGS = '<line class="prop2" x1="86" y1="8" x2="90" y2="58"/><line class="prop2" x1="134" y1="8" x2="130" y2="58"/><circle class="prop-ring" cx="90" cy="62" r="5"/><circle class="prop-ring" cx="130" cy="62" r="5"/>';
const RINGS_HI = '<line class="prop2" x1="96" y1="6" x2="104" y2="30"/><line class="prop2" x1="124" y1="6" x2="116" y2="30"/><circle class="prop-ring" cx="105" cy="34" r="5"/><circle class="prop-ring" cx="115" cy="34" r="5"/>';
const WALL_R = '<line class="prop" x1="186" y1="10" x2="186" y2="134"/>';
const BLOCK = '<rect class="prop-fill" x="128" y="120" width="26" height="14"/>';
const PLATE = '<rect class="prop-fill" x="100" y="70" width="20" height="10" rx="3"/>';
const WEIGHT = '<rect class="prop-fill" x="102" y="96" width="16" height="12" rx="3"/>';
const TOWEL = '<line class="prop2" x1="104" y1="20" x2="104" y2="34"/><line class="prop2" x1="116" y1="20" x2="116" y2="34"/>';
const BAND = '<line class="prop2" x1="110" y1="22" x2="112" y2="112" stroke-dasharray="5 4"/>';

const hold = p => [p, p.map((v,i)=> i % 2 ? v + 3 : v)];
const reps = (a,b) => [a,b];
const EX = (label, props, poses) => ({label:label, props:props, poses:poses});

const EXMOVE = {

/* ---------------- Push-Up ---------------- */
"Push-Up|Incline push-up": EX("Hands raised", FLOOR + BOX_R, reps(
 [168,58, 152,68, 158,82, 164,96, 96,88, 68,107, 40,126],
 [168,84, 152,90, 168,94, 164,96, 96,104, 68,117, 40,129])),
"Push-Up|Full push-up": EX("Push-up", FLOOR, reps(
 [160,88, 146,96, 150,114, 154,132, 90,108, 64,119, 38,128],
 [160,116, 146,122, 163,124, 154,132, 90,125, 64,130, 38,131])),
"Push-Up|Diamond / close push-up": EX("Hands under the chest", FLOOR, reps(
 [154,88, 146,96, 147,114, 148,132, 90,108, 64,119, 38,128],
 [152,118, 146,124, 152,128, 148,132, 90,126, 64,130, 38,131])),
"Push-Up|Archer push-up": EX("Wide, one side loaded", FLOOR, reps(
 [160,88, 146,96, 150,114, 154,132, 90,108, 64,119, 38,128, null,null,null,null, 128,114, 112,130],
 [164,112, 150,118, 162,124, 154,132, 92,124, 66,130, 40,131, null,null,null,null, 126,124, 110,131])),
"Push-Up|Pseudo-planche push-up": EX("Shoulders past the hands", FLOOR, reps(
 [174,90, 160,96, 154,114, 148,132, 104,106, 76,118, 48,128],
 [174,116, 160,120, 170,126, 148,132, 104,124, 76,129, 48,131])),
"Push-Up|One-arm push-up": EX("One arm, wide feet", FLOOR, reps(
 [160,88, 146,96, 150,114, 152,132, 90,108, 62,116, 36,122, 66,126, 40,132],
 [160,116, 146,122, 162,124, 152,132, 90,125, 62,128, 36,124, 66,130, 40,133])),

/* ---------------- Pull-Up ---------------- */
"Pull-Up|Scapular pull-up": EX("Shoulders only", HIBAR, reps(
 [104,52, 110,62, 113,42, 110,22, 110,96, 112,118, 112,137],
 [104,44, 110,54, 113,38, 110,22, 110,88, 112,110, 112,129])),
"Pull-Up|Assisted pull-up or negative": EX("Band or slow lowering", HIBAR + BAND, reps(
 [102,18, 108,34, 128,36, 110,22, 114,70, 122,94, 126,114],
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130])),
"Pull-Up|Full pull-up": EX("Chin over the bar", HIBAR, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [102,18, 108,34, 128,36, 110,22, 114,70, 122,94, 126,114])),
"Pull-Up|Chest-to-bar pull-up": EX("Chest to the bar", HIBAR, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [98,16, 104,28, 128,32, 110,22, 122,66, 132,88, 138,106])),
"Pull-Up|Weighted pull-up": EX("Loaded", HIBAR + WEIGHT, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [102,18, 108,34, 128,36, 110,22, 112,70, 114,94, 114,114])),
"Pull-Up|Archer / assisted one-arm": EX("Wide, pulling to one hand", HIBAR, reps(
 [129,46, 135,56, 124,40, 110,22, 135,90, 136,112, 136,130, 0,0,0,0, 148,40, 160,22],
 [112,26, 118,40, 116,32, 110,22, 126,72, 130,94, 132,112, 0,0,0,0, 139,30, 160,22])),

/* ---------------- Row ---------------- */
"Row / Horizontal Pull|High bar row": EX("Steep body angle", FLOOR + ROWBAR_HI, reps(
 [120,110, 130,116, 122,102, 112,89, 166,127, 182,130, 198,132],
 [110,94, 120,100, 138,94, 112,89, 158,118, 178,126, 198,132])),
"Row / Horizontal Pull|Horizontal row": EX("Body level, heels down", FLOOR + ROWBAR_LO, reps(
 [120,88, 130,96, 122,80, 112,65, 166,110, 188,121, 208,130],
 [110,70, 120,78, 140,72, 112,65, 158,98, 184,115, 208,130])),
"Row / Horizontal Pull|Feet-elevated row": EX("Feet on a box", ROWBAR_LO + BOX_R, reps(
 [118,80, 128,88, 120,76, 112,65, 164,92, 182,95, 200,96],
 [108,64, 118,72, 138,66, 112,65, 156,84, 178,92, 200,96])),
"Row / Horizontal Pull|Archer row": EX("Pulling to one hand", ROWBAR_LO + BOX_R, reps(
 [118,80, 128,88, 120,76, 112,65, 164,92, 182,95, 200,96, null,null,null,null, 140,78, 152,65],
 [110,66, 120,74, 116,68, 112,65, 158,86, 180,93, 200,96, null,null,null,null, 136,68, 152,65])),
"Row / Horizontal Pull|One-arm row / front lever row": EX("One arm, no twisting", ROWBAR_LO + BOX_R, reps(
 [118,80, 128,88, 121,77, 112,65, 164,92, 182,95, 200,96],
 [108,62, 118,70, 116,66, 112,65, 156,82, 178,90, 200,96])),

/* ---------------- Dip ---------------- */
"Dip|Support hold": EX("Locked-out support", DIPBARS, hold(
 [103,26, 110,38, 110,50, 110,62, 112,70, 120,94, 110,114])),
"Dip|Bench or box dip": EX("Feet in front", FLOOR + BENCH_R, reps(
 [128,74, 136,84, 146,94, 152,100, 122,112, 84,116, 50,130],
 [126,92, 134,100, 150,102, 152,100, 120,124, 84,126, 50,132])),
"Dip|Negative dip": EX("Five seconds down", DIPBARS, reps(
 [103,26, 110,38, 110,50, 110,62, 112,70, 120,94, 110,114],
 [99,50, 106,60, 124,54, 110,62, 110,90, 117,112, 104,130])),
"Dip|Parallel bar dip": EX("Full depth", DIPBARS, reps(
 [103,26, 110,38, 110,50, 110,62, 112,70, 120,94, 110,114],
 [99,46, 106,56, 123,51, 110,62, 110,86, 117,110, 104,128])),
"Dip|Ring dip": EX("Rings turned out", RINGS, reps(
 [103,26, 110,38, 108,50, 106,62, 112,70, 120,94, 110,114],
 [99,46, 106,56, 122,52, 104,62, 110,86, 117,110, 104,128])),
"Dip|Weighted dip": EX("Loaded", DIPBARS + WEIGHT, reps(
 [103,26, 110,38, 110,50, 110,62, 112,74, 118,98, 110,118],
 [99,46, 106,56, 123,51, 110,62, 110,88, 116,112, 104,130])),

/* ---------------- Hanging &amp; Grip ---------------- */
"Hanging &amp; Grip|Passive dead hang": EX("Shoulders relaxed up", HIBAR, hold(
 [104,52, 110,62, 113,42, 110,22, 110,96, 112,118, 112,136])),
"Hanging &amp; Grip|Active hang": EX("Shoulders pulled down", HIBAR, hold(
 [104,42, 110,52, 113,37, 110,22, 108,86, 112,108, 114,127])),
"Hanging &amp; Grip|Hanging with movement": EX("Shifting side to side", HIBAR, reps(
 [98,44, 104,54, 108,38, 110,22, 96,86, 90,108, 86,126],
 [116,44, 118,54, 114,38, 110,22, 126,86, 132,108, 138,126])),
"Hanging &amp; Grip|Skin the cat": EX("Roll through", MIDBAR, reps(
 [104,54, 110,62, 111,49, 110,36, 110,92, 110,114, 110,132],
 [104,78, 110,66, 111,51, 110,36, 110,48, 110,30, 110,14])),
"Hanging &amp; Grip|Towel or fingertip hang": EX("Towel grip", HIBAR + TOWEL, hold(
 [104,50, 110,60, 113,44, 110,34, 110,94, 112,116, 112,134])),

/* ---------------- Core &amp; Compression ---------------- */
"Core &amp; Compression|Hollow-body hold": EX("Lower back flat", FLOOR, hold(
 [56,116, 74,120, 58,110, 44,104, 116,124, 146,116, 172,110])),
"Core &amp; Compression|Hanging knee raise": EX("Knees above the hips", HIBAR, reps(
 [104,44, 110,54, 113,38, 110,22, 110,88, 112,110, 112,128],
 [102,46, 108,56, 112,39, 110,22, 108,84, 128,76, 126,96])),
"Core &amp; Compression|Hanging leg raise": EX("Straight legs to level", HIBAR, reps(
 [104,44, 110,54, 113,38, 110,22, 110,88, 112,110, 112,128],
 [102,46, 108,56, 112,39, 110,22, 106,86, 130,82, 154,80])),
"Core &amp; Compression|Toes to bar": EX("Feet to the bar", HIBAR, reps(
 [104,44, 110,54, 113,38, 110,22, 110,88, 112,110, 112,128],
 [104,58, 108,66, 111,44, 110,22, 100,74, 106,48, 112,26])),
"Core &amp; Compression|Dragon flag": EX("Rigid body, pivot at the shoulders", FLOOR + BENCH_R, reps(
 [170,116, 152,116, 168,106, 178,100, 120,88, 96,64, 76,44],
 [170,116, 152,116, 168,106, 178,100, 122,112, 100,108, 80,104])),

/* ---------------- Squat &amp; Lunge ---------------- */
"Squat &amp; Lunge|Bodyweight squat": EX("Both legs, full depth", FLOOR, reps(
 [110,32, 110,46, 113,62, 116,78, 110,84, 108,108, 106,132, 114,108, 116,132],
 [102,58, 105,72, 118,80, 131,85, 98,102, 118,112, 106,132, 124,110, 118,132])),
"Squat &amp; Lunge|Split squat": EX("Long stance, back knee down", FLOOR, reps(
 [104,32, 104,46, 108,62, 112,76, 104,84, 86,108, 74,132, 126,110, 138,132],
 [100,52, 100,66, 106,80, 112,92, 100,100, 84,116, 74,132, 122,128, 140,132])),
"Squat &amp; Lunge|Bulgarian split squat": EX("Rear foot raised", FLOOR + BOX_R, reps(
 [96,30, 96,44, 100,60, 104,74, 96,82, 80,108, 70,132, 130,106, 152,96],
 [92,50, 92,64, 98,78, 104,90, 92,98, 78,116, 70,132, 126,120, 152,96])),
"Squat &amp; Lunge|Box pistol / assisted pistol": EX("Sit to a box", FLOOR + BOX_LOW, reps(
 [110,30, 110,44, 122,56, 134,62, 110,82, 108,107, 106,132, 128,96, 150,92],
 [104,64, 104,78, 118,80, 134,80, 100,106, 102,120, 104,132, 130,104, 154,102])),
"Squat &amp; Lunge|Jump squat / explosive work": EX("Feet leave the floor", FLOOR, reps(
 [102,58, 105,72, 118,80, 131,85, 98,102, 118,112, 106,132, 124,110, 118,132],
 [104,14, 106,28, 96,42, 90,54, 106,66, 106,92, 104,116, 112,92, 114,116])),

/* ---------------- Hinge &amp; Hamstrings ---------------- */
"Hinge &amp; Hamstrings|Glute bridge": EX("Hips up", FLOOR, reps(
 [56,124, 72,124, 68,131, 62,133, 112,126, 140,112, 160,132],
 [56,124, 72,124, 68,131, 62,133, 112,100, 140,100, 160,132])),
"Hinge &amp; Hamstrings|Single-leg glute bridge": EX("One leg, hips level", FLOOR, reps(
 [56,124, 72,124, 68,131, 62,133, 112,126, 140,112, 160,132, 136,118, 164,110],
 [56,124, 72,124, 68,131, 62,133, 112,98, 140,98, 160,132, 138,84, 168,74])),
"Hinge &amp; Hamstrings|Nordic curl negative": EX("Lower part way, hands catch", FLOOR, reps(
 [104,52, 106,66, 110,82, 114,96, 106,100, 108,126, 132,132],
 [80,74, 88,82, 82,102, 76,120, 102,102, 108,126, 132,132])),
"Hinge &amp; Hamstrings|Slider or ring leg curl": EX("Hips high, heels pull in", FLOOR + RINGS, reps(
 [46,124, 62,122, 56,130, 50,133, 106,102, 136,102, 160,124],
 [46,124, 62,122, 56,130, 50,133, 96,100, 112,92, 122,110])),
"Hinge &amp; Hamstrings|Full Nordic curl": EX("All the way down and back", FLOOR, reps(
 [104,52, 106,66, 110,82, 114,96, 106,100, 108,126, 132,132],
 [62,116, 76,116, 68,124, 60,130, 100,106, 108,126, 132,132])),

/* ---------------- Pistol Squat ---------------- */
"Pistol Squat|Assisted pistol": EX("Holding a support", FLOOR + POLE, reps(
 [110,32, 110,46, 96,54, 74,52, 110,82, 108,107, 106,132, 128,96, 150,92],
 [104,62, 104,76, 92,70, 74,56, 100,104, 102,120, 104,132, 128,102, 152,100])),
"Pistol Squat|Box pistol": EX("Touch and stand", FLOOR + BOX_LOW, reps(
 [110,30, 110,44, 122,56, 134,62, 110,82, 108,107, 106,132, 128,96, 150,92],
 [104,64, 104,78, 118,80, 134,80, 100,106, 102,120, 104,132, 130,104, 154,102])),
"Pistol Squat|Full pistol": EX("Full depth, no support", FLOOR, reps(
 [110,30, 110,44, 122,56, 134,62, 110,82, 108,107, 106,132, 128,96, 150,92],
 [98,66, 100,80, 116,82, 132,82, 94,110, 100,124, 106,132, 128,104, 152,102])),
"Pistol Squat|Weighted or elevated pistol": EX("Load at the chest", FLOOR + PLATE, reps(
 [110,30, 110,44, 116,54, 120,66, 110,82, 108,107, 106,132, 128,96, 150,92],
 [98,66, 100,80, 108,76, 116,72, 94,110, 100,124, 106,132, 128,104, 152,102])),
"Pistol Squat|Shrimp squat": EX("Rear foot held behind", FLOOR, reps(
 [110,30, 110,44, 122,54, 132,64, 110,82, 112,107, 112,132, 96,88, 116,72],
 [104,60, 104,74, 116,76, 128,74, 100,102, 106,120, 110,132, 84,110, 96,96])),

/* ---------------- Crow &amp; Elbow Lever ---------------- */
"Crow &amp; Elbow Lever|Frog stand": EX("Knees on bent arms", FLOOR, hold(
 [128,100, 112,104, 112,118, 110,132, 92,104, 108,114, 92,124])),
"Crow &amp; Elbow Lever|Crow pose (straight-ish arms)": EX("Higher, arms straighter", FLOOR, hold(
 [130,90, 114,94, 113,113, 110,132, 92,92, 106,104, 88,114])),
"Crow &amp; Elbow Lever|Tuck elbow lever": EX("Elbows in the hips, knees tucked", FLOOR, hold(
 [132,102, 108,104, 112,118, 110,132, 86,104, 74,98, 86,90])),
"Crow &amp; Elbow Lever|Straddle elbow lever": EX("Legs split wide", FLOOR, hold(
 [132,102, 108,104, 112,118, 110,132, 86,104, 64,96, 40,90, 66,112, 42,118])),
"Crow &amp; Elbow Lever|Full elbow lever": EX("One straight line", FLOOR, hold(
 [132,102, 108,104, 112,118, 110,132, 86,104, 64,104, 40,104])),

/* ---------------- Handstand ---------------- */
"Handstand|Chest-to-wall handstand": EX("Belly to the wall", FLOOR + WALL_R, hold(
 [144,120, 150,107, 150,120, 150,132, 152,72, 154,46, 156,20])),
"Handstand|Kick-up to balance": EX("Kick and catch the balance", FLOOR, reps(
 [126,116, 118,106, 114,119, 110,132, 116,78, 128,58, 140,42, 104,60, 96,40],
 [104,120, 110,107, 110,120, 110,132, 110,72, 110,46, 110,20, 112,46, 112,20])),
"Handstand|Freestanding handstand": EX("Stacked and still", FLOOR, hold(
 [103,120, 110,107, 110,120, 110,132, 110,72, 110,45, 110,20])),
"Handstand|Straddle or tuck press": EX("Lean, then lift", FLOOR, reps(
 [128,110, 116,104, 113,118, 110,132, 92,86, 70,104, 52,132, 100,110, 120,132],
 [104,120, 110,106, 110,119, 110,132, 110,74, 92,52, 76,34, 128,52, 144,34])),
"Handstand|One-arm handstand": EX("Weight over one hand", FLOOR, hold(
 [100,120, 108,107, 109,120, 110,132, 112,72, 114,46, 116,20, null,null,null,null, 124,112, 138,98])),

/* ---------------- One-Arm Handstand ---------------- */
"One-Arm Handstand|Bulletproof freestanding handstand": EX("Two hands, effortless", FLOOR, hold(
 [110,118, 110,106, 102,119, 96,132, 110,72, 110,46, 110,20, null,null,null,null, 118,119, 124,132])),
"One-Arm Handstand|Weight shifts and taps": EX("Load one arm, tap the other", FLOOR, reps(
 [110,118, 110,106, 102,119, 96,132, 110,72, 110,46, 110,20, null,null,null,null, 118,119, 124,132],
 [102,118, 102,106, 98,119, 96,132, 108,72, 112,46, 116,20, null,null,null,null, 114,114, 126,122])),
"One-Arm Handstand|Assisted one-arm": EX("Free hand on a block", FLOOR + BLOCK, hold(
 [100,118, 100,106, 98,119, 96,132, 108,72, 112,46, 116,20, null,null,null,null, 116,112, 138,120])),
"One-Arm Handstand|Two-finger / staggered support": EX("Barely any support", FLOOR + BLOCK, hold(
 [98,118, 98,106, 97,119, 96,132, 108,72, 114,46, 120,20, null,null,null,null, 118,110, 140,118])),
"One-Arm Handstand|One-arm handstand": EX("Free arm alongside", FLOOR, hold(
 [98,118, 98,106, 97,119, 96,132, 106,72, 112,46, 118,20, null,null,null,null, 108,92, 118,74])),

/* ---------------- Handstand Push-Up ---------------- */
"Handstand Push-Up|Pike push-up": EX("Feet on the floor", FLOOR, reps(
 [156,104, 143,100, 147,116, 151,132, 100,60, 80,96, 62,132],
 [160,122, 145,119, 160,126, 151,132, 100,64, 80,98, 62,132])),
"Handstand Push-Up|Elevated pike push-up": EX("Feet on a box", FLOOR + BOX_L, reps(
 [150,96, 138,92, 144,112, 150,132, 92,52, 68,78, 44,104],
 [154,118, 140,114, 156,124, 150,132, 92,56, 68,80, 44,104])),
"Handstand Push-Up|Wall handstand push-up": EX("Against the wall", FLOOR + WALL_R, reps(
 [144,117, 152,104, 152,118, 152,132, 154,70, 156,44, 158,20],
 [140,127, 150,124, 164,127, 152,132, 154,92, 156,64, 158,38])),
"Handstand Push-Up|Freestanding handstand push-up": EX("No wall", FLOOR, reps(
 [102,117, 110,104, 110,118, 110,132, 110,70, 110,44, 110,20],
 [96,127, 108,124, 123,127, 110,132, 112,92, 112,64, 112,38])),
"Handstand Push-Up|Deficit or 90° press": EX("Head below the hands", FLOOR + PARALLETTES, reps(
 [102,100, 110,88, 110,99, 110,110, 110,58, 110,36, 110,14],
 [96,124, 108,116, 124,116, 110,110, 110,84, 110,58, 110,32])),

/* ---------------- Planche ---------------- */
"Planche|Planche lean": EX("Feet down, big lean", FLOOR, hold(
 [150,92, 136,100, 124,116, 110,132, 84,108, 58,118, 34,128])),
"Planche|Tuck planche": EX("Knees to the chest", FLOOR, hold(
 [132,94, 114,100, 112,116, 110,132, 86,100, 100,88, 112,92])),
"Planche|Advanced tuck planche": EX("Hips open, flat back", FLOOR, hold(
 [132,96, 114,100, 112,116, 110,132, 78,100, 92,88, 104,84])),
"Planche|Straddle planche": EX("Legs wide", FLOOR, hold(
 [132,98, 114,100, 112,116, 110,132, 80,100, 60,92, 38,86, 60,108, 38,114])),
"Planche|Full planche": EX("One horizontal line", FLOOR, hold(
 [132,98, 114,100, 112,116, 110,132, 80,100, 58,100, 34,100])),

/* ---------------- Front Lever ---------------- */
"Front Lever|Tuck front lever": EX("Knees tucked", MIDBAR, hold(
 [96,60, 114,64, 112,50, 110,36, 150,66, 150,48, 136,42])),
"Front Lever|Advanced tuck front lever": EX("Hips open, knees in", MIDBAR, hold(
 [96,60, 114,64, 112,50, 110,36, 152,64, 168,52, 156,44])),
"Front Lever|One-leg front lever": EX("One leg out", MIDBAR, hold(
 [96,60, 114,64, 112,50, 110,36, 152,64, 176,64, 198,64, 164,50, 150,46])),
"Front Lever|Straddle front lever": EX("Legs wide", MIDBAR, hold(
 [96,60, 114,64, 112,50, 110,36, 152,64, 172,54, 194,44, 172,74, 194,84])),
"Front Lever|Full front lever": EX("Flat, legs together", MIDBAR, hold(
 [96,60, 114,64, 112,50, 110,36, 152,64, 176,64, 198,64])),

/* ---------------- Back Lever ---------------- */
"Back Lever|German hang": EX("Hanging in shoulder extension", MIDBAR, hold(
 [84,74, 92,66, 100,52, 110,36, 100,92, 106,114, 112,132])),
"Back Lever|Tuck back lever": EX("Face down, knees tucked", MIDBAR, hold(
 [96,72, 108,66, 108,50, 110,36, 142,68, 144,54, 130,50])),
"Back Lever|Advanced tuck back lever": EX("Hips open", MIDBAR, hold(
 [96,72, 108,66, 108,50, 110,36, 146,66, 162,54, 150,46])),
"Back Lever|Straddle back lever": EX("Legs wide", MIDBAR, hold(
 [96,72, 108,66, 108,50, 110,36, 146,66, 172,56, 194,46, 172,76, 194,86])),
"Back Lever|Full back lever": EX("Flat, legs together", MIDBAR, hold(
 [96,72, 108,66, 108,50, 110,36, 146,66, 172,66, 196,66])),

/* ---------------- Human Flag ---------------- */
"Human Flag|Clutch flag": EX("Pole wedged in the elbow", POLE, hold(
 [92,66, 92,74, 74,70, 62,62, 130,78, 152,82, 176,86])),
"Human Flag|Support setup and vertical flag": EX("Body straight up the pole", POLE, hold(
 [74,50, 70,60, 62,50, 60,40, 76,42, 82,24, 88,8, null,null,null,null, 64,72, 60,84])),
"Human Flag|Tuck flag": EX("Sideways, knees tucked", POLE, hold(
 [84,54, 86,64, 74,58, 60,52, 118,66, 116,50, 102,46, null,null,null,null, 70,74, 60,86])),
"Human Flag|One-leg flag": EX("One leg extended", POLE, hold(
 [84,54, 86,64, 74,58, 60,52, 118,66, 140,64, 164,64, 124,52, 112,48, 70,74, 60,86])),
"Human Flag|Straddle flag": EX("Legs wide", POLE, hold(
 [84,54, 86,64, 74,58, 60,52, 118,66, 140,54, 162,44, 140,76, 162,86, 70,74, 60,86])),
"Human Flag|Full flag": EX("One clean line", POLE, hold(
 [84,54, 86,64, 74,58, 60,52, 118,66, 142,66, 168,66, null,null,null,null, 70,74, 60,86])),

/* ---------------- L-sit → V-sit → Manna ---------------- */
"L-sit → V-sit → Manna|Support hold with tuck": EX("Knees tucked", PARALLETTES, hold(
 [104,68, 110,80, 110,95, 110,110, 112,110, 126,98, 116,110])),
"L-sit → V-sit → Manna|One-leg L-sit": EX("One leg out", PARALLETTES, hold(
 [104,68, 110,80, 110,95, 110,110, 112,110, 140,108, 166,106, 126,100, 118,112])),
"L-sit → V-sit → Manna|L-sit": EX("Legs level", PARALLETTES, hold(
 [104,68, 110,80, 110,95, 110,110, 112,110, 140,108, 166,106])),
"L-sit → V-sit → Manna|V-sit": EX("Legs above level", PARALLETTES, hold(
 [104,70, 108,82, 109,96, 110,110, 110,112, 134,86, 156,66])),
"L-sit → V-sit → Manna|Manna": EX("Hips behind the hands", PARALLETTES, hold(
 [96,70, 104,82, 107,96, 110,110, 92,112, 110,88, 126,66])),

/* ---------------- Swinging &amp; Bar Basics ---------------- */
"Swinging &amp; Bar Basics|Passive swing": EX("Small, relaxed swing", HIBAR, reps(
 [100,46, 106,56, 110,39, 110,22, 100,90, 96,112, 92,130],
 [114,46, 116,56, 112,39, 110,22, 122,90, 128,112, 132,130])),
"Swinging &amp; Bar Basics|Tap swing (active swing)": EX("Hollow to arch", HIBAR, reps(
 [99,44, 106,54, 110,37, 110,22, 119,86, 129,108, 137,126],
 [113,44, 115,54, 112,37, 110,22, 98,84, 84,104, 74,120])),
"Swinging &amp; Bar Basics|Kip / knee raise swing": EX("Knees drive at the front", HIBAR, reps(
 [113,44, 115,54, 112,37, 110,22, 100,84, 86,104, 76,120],
 [104,48, 110,58, 112,39, 110,22, 108,86, 132,78, 132,100])),
"Swinging &amp; Bar Basics|Hip pullover": EX("Roll over the bar", HIBAR, [
 [104,46, 110,56, 113,38, 110,22, 110,88, 112,110, 112,128],
 [124,36, 118,44, 112,32, 110,22, 108,42, 92,30, 78,22],
 [104,4, 110,14, 112,18, 110,22, 112,44, 116,68, 112,90]]),
"Swinging &amp; Bar Basics|Back hip circle": EX("Hips glued to the bar", HIBAR, [
 [104,4, 110,14, 112,18, 110,22, 112,44, 116,68, 112,90],
 [128,26, 120,26, 114,24, 110,22, 128,42, 118,62, 100,72],
 [104,4, 110,14, 112,18, 110,22, 112,44, 116,68, 112,90]]),
"Swinging &amp; Bar Basics|Controlled dismount": EX("Release and land", HIBAR + FLOOR, reps(
 [113,44, 115,54, 112,37, 110,22, 98,84, 84,104, 74,120],
 [70,66, 72,78, 62,68, 54,58, 74,100, 72,118, 70,132])),

/* ---------------- Muscle-Up ---------------- */
"Muscle-Up|Strict chest-to-bar pull-up": EX("Chest to the bar", HIBAR, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [98,16, 104,28, 128,32, 110,22, 122,66, 132,88, 138,106])),
"Muscle-Up|Straight-bar dip": EX("Support on one bar", MIDBAR, reps(
 [104,14, 110,26, 110,31, 110,36, 114,60, 120,84, 112,104],
 [100,32, 106,42, 124,38, 110,36, 112,66, 118,90, 106,110])),
"Muscle-Up|Explosive high pull": EX("Pull the bar to the ribs", HIBAR, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [96,14, 102,26, 128,30, 110,22, 124,62, 136,84, 142,102])),
"Muscle-Up|Transition drills": EX("Chest over the bar", MIDBAR, reps(
 [104,26, 110,38, 118,32, 110,36, 112,72, 116,96, 116,116],
 [122,30, 118,42, 128,38, 110,36, 110,74, 118,96, 124,116])),
"Muscle-Up|Strict bar muscle-up": EX("Pull, roll, press out", MIDBAR, [
 [105,58, 110,68, 113,52, 110,36, 110,98, 114,119, 116,136],
 [120,32, 117,45, 129,41, 110,36, 108,78, 116,99, 122,119],
 [107,14, 110,27, 112,33, 110,36, 112,62, 117,86, 112,108]]),

/* ---------------- Ring Muscle-Up ---------------- */
"Ring Muscle-Up|False-grip hang and pull": EX("Wrists over the rings", RINGS_HI, reps(
 [104,56, 110,66, 113,50, 108,36, 110,100, 112,122, 112,140],
 [102,30, 108,44, 126,44, 108,36, 112,80, 116,104, 118,124])),
"Ring Muscle-Up|Ring dips with turnout": EX("Rings turned out", RINGS, reps(
 [103,26, 110,38, 108,50, 106,62, 112,70, 120,94, 110,114],
 [99,46, 106,56, 122,52, 104,62, 110,86, 117,110, 104,128])),
"Ring Muscle-Up|Explosive false-grip pull": EX("Rings to the chest", RINGS_HI, reps(
 [104,56, 110,66, 113,50, 108,36, 110,100, 112,122, 112,140],
 [98,26, 104,38, 124,40, 108,36, 116,74, 124,98, 128,118])),
"Ring Muscle-Up|Transition work": EX("Roll through the catch", RINGS_HI, reps(
 [104,36, 110,48, 116,42, 108,36, 112,82, 116,106, 116,126],
 [120,30, 116,42, 124,40, 108,36, 110,78, 118,100, 124,120])),
"Ring Muscle-Up|Strict ring muscle-up": EX("Pull, roll, press", RINGS_HI, [
 [104,56, 110,66, 113,50, 108,36, 110,100, 112,122, 112,140],
 [118,32, 115,44, 126,42, 108,36, 108,80, 116,102, 122,122],
 [104,10, 110,22, 110,29, 108,36, 112,58, 117,82, 112,104]]),

/* ---------------- Bar Tricks &amp; Freestyle ---------------- */
"Bar Tricks &amp; Freestyle|Ice cream maker": EX("Inverted out to lever", MIDBAR, reps(
 [104,78, 110,66, 111,51, 110,36, 110,48, 110,30, 110,14],
 [96,60, 114,64, 112,50, 110,36, 150,66, 150,48, 136,42])),
"Bar Tricks &amp; Freestyle|Kipping muscle-up": EX("Swing, kip, turn over", MIDBAR, [
 [118,58, 118,68, 114,52, 110,36, 96,96, 84,116, 76,132],
 [116,34, 114,46, 126,42, 110,36, 106,80, 116,102, 124,120],
 [107,14, 110,27, 112,33, 110,36, 112,62, 117,86, 112,108]]),
"Bar Tricks &amp; Freestyle|360 bar spin": EX("Release, turn, re-catch", HIBAR, [
 [113,44, 115,54, 112,37, 110,22, 98,84, 84,104, 74,120],
 [104,42, 110,52, 118,40, 128,30, 110,84, 112,106, 112,124],
 [99,44, 106,54, 104,38, 92,26, 118,86, 128,106, 136,122]]),
"Bar Tricks &amp; Freestyle|Shrimp flip / bar flip": EX("Rotate over the bar", HIBAR, [
 [104,46, 110,56, 113,38, 110,22, 110,88, 112,110, 112,128],
 [128,30, 120,32, 112,28, 110,22, 116,44, 96,38, 80,32],
 [104,6, 110,16, 112,20, 110,22, 112,46, 116,70, 112,92]]),
"Bar Tricks &amp; Freestyle|Hefesto (reverse muscle-up)": EX("Back lever up behind the bar", MIDBAR, reps(
 [96,72, 108,66, 108,50, 110,36, 146,66, 172,66, 196,66],
 [116,40, 118,52, 116,44, 110,36, 140,58, 160,68, 180,76])),

/* ---------------- Rings &amp; the Cross ---------------- */
"Rings &amp; the Cross|Ring support hold": EX("Turned-out support", RINGS, hold(
 [103,26, 110,38, 109,50, 106,62, 112,70, 120,94, 110,114])),
"Rings &amp; the Cross|Ring row and ring push-up": EX("Low rings, body a plank", RINGS + FLOOR, reps(
 [120,88, 130,96, 120,80, 110,64, 166,110, 188,121, 208,130],
 [110,70, 120,78, 138,72, 110,64, 158,98, 184,115, 208,130])),
"Rings &amp; the Cross|Ring dip and ring L-sit": EX("Dip, then hold the L", RINGS, reps(
 [99,46, 106,56, 122,52, 104,62, 110,86, 117,110, 104,128],
 [103,28, 110,40, 108,51, 106,62, 112,66, 138,64, 164,62])),
"Rings &amp; the Cross|Ring back lever and skin the cat": EX("Roll down to the lever", RINGS_HI, reps(
 [104,74, 110,62, 111,48, 108,34, 110,44, 110,26, 110,10],
 [96,70, 108,64, 108,48, 108,34, 146,64, 172,64, 196,64])),
"Rings &amp; the Cross|Iron cross progressions": EX("Arms out to the sides", RINGS, reps(
 [110,30, 110,42, 104,52, 96,60, 110,74, 112,98, 110,120, null,null,null,null, 116,52, 124,60],
 [110,34, 110,46, 96,48, 78,50, 110,78, 112,102, 110,124, null,null,null,null, 124,48, 142,50])),

/* ---------------- One-Arm Pull-Up ---------------- */
"One-Arm Pull-Up|Heavy weighted pull-ups": EX("Serious load", HIBAR + WEIGHT, reps(
 [104,44, 110,54, 118,38, 110,22, 110,88, 112,111, 112,130],
 [102,18, 108,34, 128,36, 110,22, 112,70, 114,94, 114,114])),
"One-Arm Pull-Up|Archer pull-ups": EX("Wide, loading one side", HIBAR, reps(
 [129,46, 135,56, 124,40, 110,22, 135,90, 136,112, 136,130, null,null,null,null, 148,40, 160,22],
 [112,26, 118,40, 116,32, 110,22, 126,72, 130,94, 132,112, null,null,null,null, 139,30, 160,22])),
"One-Arm Pull-Up|Assisted one-arm": EX("Towel for the free hand", HIBAR + TOWEL, reps(
 [104,48, 110,58, 114,40, 110,22, 110,92, 112,114, 112,132, null,null,null,null, 122,50, 118,34],
 [102,22, 108,36, 126,38, 110,22, 114,72, 118,96, 120,116, null,null,null,null, 122,36, 118,34])),
"One-Arm Pull-Up|One-arm negatives": EX("Slow lowering, one arm", HIBAR, reps(
 [100,20, 106,34, 124,36, 110,22, 114,70, 118,94, 120,114],
 [102,48, 108,58, 112,40, 110,22, 112,92, 116,114, 118,132])),
"One-Arm Pull-Up|One-arm pull-up": EX("One arm, full range", HIBAR, reps(
 [102,48, 108,58, 112,40, 110,22, 112,92, 116,114, 118,132, null,null,null,null, 100,74, 106,92],
 [100,20, 106,34, 124,36, 110,22, 114,70, 118,94, 120,114, null,null,null,null, 96,54, 100,72]))
};

/* =====================================================================
   3D VIEW
   A small stick figure built in real 3D, so hand and foot placement is
   visible from any angle. Poses are generated from parameters rather
   than hand-drawn, so "diamond" and "full push-up" differ by one number.
   Axes: x right, y up, z toward the viewer. Floor is y = 0.
   ===================================================================== */

const B = { arm:0.30, fore:0.29, sh:0.21, torso:0.62, hip:0.15, thigh:0.44, shin:0.44, head:0.13 };
const add = (a,b)=>[a[0]+b[0], a[1]+b[1], a[2]+b[2]];
const mul = (a,k)=>[a[0]*k, a[1]*k, a[2]*k];
const mid = (a,b)=>[(a[0]+b[0])/2, (a[1]+b[1])/2, (a[2]+b[2])/2];
const lerp = (a,b,t)=> a + (b-a)*t;

/* elbow sits off the straight shoulder-to-hand line, pushed by "flare"
   (out to the side) and "back" (behind the body) */
function elbow(sh, hand, flare, back, side){
  const m = mid(sh, hand);
  return [m[0] + flare * side, m[1], m[2] + back];
}

const RIGS = {

/* ---- hands on the floor or a box, body roughly horizontal ---- */
floorPress(p, t){
  const hw = p.hw ?? 0.26;          // half the distance between the hands
  const hy = p.hy ?? 0;             // hand height (a box or bar raises it)
  const hz = p.hz ?? 0.04;          // how far the hands sit ahead of the shoulders
  const fw = p.fw ?? 0.10;          // half the distance between the feet
  const reach = lerp(0.56, 0.20, t);      // straight arms to bottom position
  const S = [0, hy + reach, -hz];         // shoulder centre
  // unless the pose says otherwise, work out the body angle that puts the feet on the floor
  const span = B.torso + B.thigh + B.shin;
  const tilt = p.tilt != null
    ? p.tilt * Math.PI/180
    : Math.asin(Math.max(-0.9, Math.min(0.9, (S[1] - (p.footY ?? 0.07)) / span)));
  const d = [0, -Math.sin(tilt), -Math.cos(tilt)];   // body axis, running to the feet
  const H = add(S, mul(d, B.torso));
  const K = add(H, mul(d, B.thigh));
  const A = add(K, mul(d, B.shin));
  const j = {
    head:[0, S[1] + 0.06, S[2] + 0.20],
    sL:[-B.sh, S[1], S[2]], sR:[B.sh, S[1], S[2]],
    hL:[-B.hip, H[1], H[2]], hR:[B.hip, H[1], H[2]],
    kL:[-fw, K[1], K[2]], kR:[fw, K[1], K[2]],
    aL:[-fw, A[1], A[2]], aR:[fw, A[1], A[2]]
  };
  const flare = (p.flare ?? 0.10) * t, back = (p.back ?? 0.16) * t;
  if(p.oneArm){
    j.wL = [0, hy, 0];
    j.eL = elbow(j.sL, j.wL, flare, back, -1);
    j.wR = [B.sh + 0.10, H[1] + 0.06, H[2] + 0.02];   // free arm on the lower back
    j.eR = [B.sh + 0.16, S[1] - 0.10, S[2] - 0.18];
    j.aL = [-fw - 0.10, j.aL[1], j.aL[2]];
    j.aR = [fw + 0.10, j.aR[1], j.aR[2]];
  } else if(p.archer){
    j.wL = [-hw, hy, 0];
    j.eL = elbow(j.sL, j.wL, flare, back, -1);
    j.wR = [hw + 0.34, hy, 0.04];                      // far arm stays straight
    j.eR = mid(j.sR, j.wR);
  } else {
    j.wL = [-hw, hy, 0]; j.wR = [hw, hy, 0];
    j.eL = elbow(j.sL, j.wL, flare, back, -1);
    j.eR = elbow(j.sR, j.wR, flare, back, 1);
  }
  return j;
},

/* ---- hanging from a bar, or pulling up to it ---- */
barHang(p, t){
  const gw = p.gw ?? 0.28;          // half the grip width
  const by = p.by ?? 1.85;          // bar height
  const rise = lerp(0, p.rise ?? 0.42, t);
  const lean = (p.lean ?? 0) * Math.PI/180;
  const S = [0, by - lerp(0.60, 0.18, t), -0.02 - rise*0.10];
  const dir = p.horizontal
    ? [0, 0, -1]                                       // body out horizontally (levers, rows)
    : [0, -Math.cos(lean), -Math.sin(lean)];           // body hanging down
  const H = add(S, mul(dir, B.torso));
  const legs = p.legs ?? "straight";
  let K, A, spread = p.fw ?? 0.08;
  if(legs === "tuck"){ K = add(H, [0, 0.16, 0.26]); A = add(K, [0, -0.16, 0.16]); }
  else if(legs === "raised"){ K = add(H, [0, 0.34, 0.30]); A = add(K, [0, 0.10, 0.34]); }
  else { K = add(H, mul(dir, B.thigh)); A = add(K, mul(dir, B.shin)); }
  const j = {
    head:[0, S[1] + 0.16, S[2] + (p.horizontal ? 0.16 : 0.04)],
    sL:[-B.sh, S[1], S[2]], sR:[B.sh, S[1], S[2]],
    hL:[-B.hip, H[1], H[2]], hR:[B.hip, H[1], H[2]],
    kL:[-spread, K[1], K[2]], kR:[spread, K[1], K[2]],
    aL:[-spread, A[1], A[2]], aR:[spread, A[1], A[2]]
  };
  const out = lerp(0.02, p.horizontal ? 0.06 : 0.16, t);
  if(p.oneArm){
    j.wL = [0, by, 0]; j.eL = [ -out, lerp(S[1] + 0.30, by - 0.14, t), -0.04];
    j.wR = [0.30, S[1] - 0.10, 0.10]; j.eR = [0.26, S[1] - 0.04, 0.02];
  } else {
    j.wL = [-gw, by, 0]; j.wR = [gw, by, 0];
    j.eL = [-gw - out, lerp(S[1] + 0.30, by - 0.16, t), -0.04];
    j.eR = [gw + out, lerp(S[1] + 0.30, by - 0.16, t), -0.04];
    if(p.archer){ j.wR = [gw + 0.34, by, 0]; j.eR = mid(j.sR, j.wR); }
  }
  return j;
},

/* ---- standing: squats, lunges, single-leg work ---- */
standing(p, t){
  const sw = p.sw ?? 0.16;          // half the stance width
  const depth = lerp(0, p.depth ?? 0.42, t);
  const hipY = 0.92 - depth;
  const lean = depth * (p.lean ?? 0.55);
  const H = [0, hipY, -lean * 0.5];
  const S = [0, hipY + B.torso * (1 - depth * 0.10), H[2] + lean];
  const j = {
    head:[S[0], S[1] + 0.20, S[2] + 0.03],
    sL:[-B.sh, S[1], S[2]], sR:[B.sh, S[1], S[2]],
    hL:[-B.hip, H[1], H[2]], hR:[B.hip, H[1], H[2]],
    eL:[-B.sh - 0.06, S[1] - 0.22, S[2] + 0.16], wL:[-B.sh - 0.04, S[1] - 0.30, S[2] + 0.40],
    eR:[B.sh + 0.06, S[1] - 0.22, S[2] + 0.16], wR:[B.sh + 0.04, S[1] - 0.30, S[2] + 0.40]
  };
  const kneeFwd = depth * 0.55;
  j.kL = [-sw, hipY - 0.42 + depth * 0.16, H[2] + kneeFwd];
  j.aL = [-sw, 0.03, H[2] + kneeFwd * 0.3];
  if(p.oneLeg){                                  // free leg out in front
    j.kR = [sw * 0.4, hipY + 0.02, H[2] + 0.42 + depth * 0.3];
    j.aR = [sw * 0.4, hipY + 0.06, H[2] + 0.82 + depth * 0.3];
  } else if(p.rearLeg){                          // split stance, back foot behind
    j.kR = [sw, hipY - 0.40 + depth * 0.34, H[2] - 0.34];
    j.aR = [sw, 0.03, H[2] - 0.62];
  } else {
    j.kR = [sw, j.kL[1], j.kL[2]];
    j.aR = [sw, 0.03, j.aL[2]];
  }
  return j;
},

/* ---- upside down on the hands ---- */
inverted(p, t){
  const hw = p.hw ?? 0.22;
  const reach = lerp(0.58, p.press ? 0.26 : 0.54, t);
  const lean = (p.lean ?? 0) + t * (p.leanT ?? 0);
  const S = [p.shift ? p.shift * t : 0, reach, lean];
  const up = [0, 1, 0];
  const H = add(S, mul(up, B.torso));
  const legs = p.legs ?? "straight";
  let K, A;
  if(legs === "tuck"){ K = add(H, [0, 0.10, 0.26]); A = add(K, [0, -0.14, 0.18]); }
  else if(legs === "split"){ K = add(H, [0, 0.40, 0.10]); A = add(K, [0, 0.40, 0.16]); }
  else { K = add(H, mul(up, B.thigh)); A = add(K, mul(up, B.shin)); }
  const spread = legs === "straddle" ? 0.34 : 0.07;
  const j = {
    head:[S[0], S[1] - 0.18, S[2] + 0.10],
    sL:[S[0] - B.sh, S[1], S[2]], sR:[S[0] + B.sh, S[1], S[2]],
    hL:[-B.hip, H[1], H[2]], hR:[B.hip, H[1], H[2]],
    kL:[-spread, K[1], K[2]], kR:[spread, K[1], K[2]],
    aL:[-spread, A[1], A[2]], aR:[spread, A[1], A[2]]
  };
  const flare = (p.flare ?? 0.10) * t;
  if(p.oneArm){
    j.wL = [0, 0, 0]; j.eL = [-flare, reach/2, 0.02];
    j.wR = [0.34, H[1] - 0.24, 0.06]; j.eR = [0.30, S[1] + 0.10, 0.04];
  } else {
    j.wL = [-hw, 0, 0]; j.wR = [hw, 0, 0];
    j.eL = [-hw - flare, reach/2, 0.04 + flare*0.4];
    j.eR = [hw + flare, reach/2, 0.04 + flare*0.4];
  }
  return j;
}

};

/* ---- which exercises have a 3D rig, and with which numbers ---- */
const RIG3D = {
// Push-up family: the whole point is hand spacing, so these differ by hw alone
"Push-Up|Incline push-up":{r:"floorPress", p:{hw:.30, hy:.50, tilt:22, flare:.12, back:.14}, prop:"box"},
"Push-Up|Full push-up":{r:"floorPress", p:{hw:.30, flare:.12, back:.16}},
"Push-Up|Diamond / close push-up":{r:"floorPress", p:{hw:.06, flare:.01, back:.24}},
"Push-Up|Archer push-up":{r:"floorPress", p:{hw:.40, archer:true, flare:.14, back:.10}},
"Push-Up|Pseudo-planche push-up":{r:"floorPress", p:{hw:.26, hz:-.34, flare:.06, back:.20}},
"Push-Up|One-arm push-up":{r:"floorPress", p:{oneArm:true, fw:.24, flare:.10, back:.18}},

// Pull-up family: grip width and one arm versus two
"Pull-Up|Scapular pull-up":{r:"barHang", p:{gw:.28, rise:.08}, prop:"bar"},
"Pull-Up|Assisted pull-up or negative":{r:"barHang", p:{gw:.28, rise:.40}, prop:"bar"},
"Pull-Up|Full pull-up":{r:"barHang", p:{gw:.28, rise:.42}, prop:"bar"},
"Pull-Up|Chest-to-bar pull-up":{r:"barHang", p:{gw:.28, rise:.50, lean:14}, prop:"bar"},
"Pull-Up|Weighted pull-up":{r:"barHang", p:{gw:.28, rise:.42, legs:"tuck"}, prop:"bar"},
"Pull-Up|Archer / assisted one-arm":{r:"barHang", p:{gw:.30, archer:true, rise:.40}, prop:"bar"},
"One-Arm Pull-Up|Heavy weighted pull-ups":{r:"barHang", p:{gw:.28, rise:.42, legs:"tuck"}, prop:"bar"},
"One-Arm Pull-Up|Archer pull-ups":{r:"barHang", p:{gw:.34, archer:true, rise:.40}, prop:"bar"},
"One-Arm Pull-Up|Assisted one-arm":{r:"barHang", p:{oneArm:true, rise:.36}, prop:"bar"},
"One-Arm Pull-Up|One-arm negatives":{r:"barHang", p:{oneArm:true, rise:.40}, prop:"bar"},
"One-Arm Pull-Up|One-arm pull-up":{r:"barHang", p:{oneArm:true, rise:.44}, prop:"bar"},
"Muscle-Up|Strict chest-to-bar pull-up":{r:"barHang", p:{gw:.28, rise:.50, lean:14}, prop:"bar"},
"Muscle-Up|Explosive high pull":{r:"barHang", p:{gw:.28, rise:.58, lean:18}, prop:"bar"},

// Hanging and core on the bar
"Hanging &amp; Grip|Passive dead hang":{r:"barHang", p:{gw:.26, rise:.05}, prop:"bar"},
"Hanging &amp; Grip|Active hang":{r:"barHang", p:{gw:.26, rise:.10}, prop:"bar"},
"Core &amp; Compression|Hanging knee raise":{r:"barHang", p:{gw:.26, rise:.04, legs:"tuck"}, prop:"bar"},
"Core &amp; Compression|Hanging leg raise":{r:"barHang", p:{gw:.26, rise:.04, legs:"raised"}, prop:"bar"},
"Core &amp; Compression|Toes to bar":{r:"barHang", p:{gw:.26, rise:.06, legs:"raised"}, prop:"bar"},

// Rows: body angle and grip
"Row / Horizontal Pull|High bar row":{r:"barHang", p:{gw:.28, by:1.05, rise:.28, lean:52, horizontal:false}, prop:"lowbar"},
"Row / Horizontal Pull|Horizontal row":{r:"barHang", p:{gw:.28, by:.80, rise:.26, lean:74}, prop:"lowbar"},
"Row / Horizontal Pull|Feet-elevated row":{r:"barHang", p:{gw:.28, by:.80, rise:.26, lean:88}, prop:"lowbar"},
"Row / Horizontal Pull|Archer row":{r:"barHang", p:{gw:.34, by:.80, rise:.24, lean:84, archer:true}, prop:"lowbar"},
"Row / Horizontal Pull|One-arm row / front lever row":{r:"barHang", p:{oneArm:true, by:.80, rise:.24, lean:84}, prop:"lowbar"},

// Legs: stance width and which leg is doing the work
"Squat &amp; Lunge|Bodyweight squat":{r:"standing", p:{sw:.17, depth:.44}},
"Squat &amp; Lunge|Split squat":{r:"standing", p:{sw:.13, depth:.38, rearLeg:true}},
"Squat &amp; Lunge|Bulgarian split squat":{r:"standing", p:{sw:.13, depth:.40, rearLeg:true}, prop:"benchBack"},
"Squat &amp; Lunge|Box pistol / assisted pistol":{r:"standing", p:{sw:.10, depth:.36, oneLeg:true}, prop:"boxBack"},
"Squat &amp; Lunge|Jump squat / explosive work":{r:"standing", p:{sw:.17, depth:.40}},
"Pistol Squat|Assisted pistol":{r:"standing", p:{sw:.10, depth:.40, oneLeg:true}},
"Pistol Squat|Box pistol":{r:"standing", p:{sw:.10, depth:.38, oneLeg:true}, prop:"boxBack"},
"Pistol Squat|Full pistol":{r:"standing", p:{sw:.10, depth:.50, oneLeg:true}},
"Pistol Squat|Weighted or elevated pistol":{r:"standing", p:{sw:.10, depth:.52, oneLeg:true}},
"Pistol Squat|Shrimp squat":{r:"standing", p:{sw:.12, depth:.46, rearLeg:true}},

// Upside down: hand spacing and how the weight is carried
"Handstand|Chest-to-wall handstand":{r:"inverted", p:{hw:.22, lean:.04}},
"Handstand|Kick-up to balance":{r:"inverted", p:{hw:.22, legs:"split"}},
"Handstand|Freestanding handstand":{r:"inverted", p:{hw:.22}},
"Handstand|Straddle or tuck press":{r:"inverted", p:{hw:.24, legs:"straddle", press:true}},
"Handstand|One-arm handstand":{r:"inverted", p:{oneArm:true}},
"One-Arm Handstand|Bulletproof freestanding handstand":{r:"inverted", p:{hw:.22}},
"One-Arm Handstand|Weight shifts and taps":{r:"inverted", p:{hw:.34, shift:.16}},
"One-Arm Handstand|Assisted one-arm":{r:"inverted", p:{hw:.34, shift:.22}},
"One-Arm Handstand|Two-finger / staggered support":{r:"inverted", p:{hw:.34, shift:.28}},
"One-Arm Handstand|One-arm handstand":{r:"inverted", p:{oneArm:true}},
"Handstand Push-Up|Pike push-up":{r:"floorPress", p:{hw:.24, tilt:-46, flare:.14, back:.10}},
"Handstand Push-Up|Elevated pike push-up":{r:"floorPress", p:{hw:.24, tilt:-64, flare:.14, back:.10}, prop:"box"},
"Handstand Push-Up|Wall handstand push-up":{r:"inverted", p:{hw:.24, press:true, flare:.16}},
"Handstand Push-Up|Freestanding handstand push-up":{r:"inverted", p:{hw:.24, press:true, flare:.16}},
"Handstand Push-Up|Deficit or 90° press":{r:"inverted", p:{hw:.26, press:true, flare:.20}},
"Crow &amp; Elbow Lever|Frog stand":{r:"inverted", p:{hw:.20, legs:"tuck", press:true, flare:.18}},
"Crow &amp; Elbow Lever|Crow pose (straight-ish arms)":{r:"inverted", p:{hw:.20, legs:"tuck", flare:.10}},

// Straight-arm holds where the leg shape is the whole story
"Planche|Tuck planche":{r:"floorPress", p:{hw:.24, hz:-.30, tilt:0, fw:.06}},
"Planche|Straddle planche":{r:"floorPress", p:{hw:.24, hz:-.30, tilt:0, fw:.34}},
"Planche|Full planche":{r:"floorPress", p:{hw:.24, hz:-.30, tilt:0, fw:.07}},
"Front Lever|Tuck front lever":{r:"barHang", p:{gw:.28, horizontal:true, legs:"tuck", rise:0}, prop:"bar"},
"Front Lever|Straddle front lever":{r:"barHang", p:{gw:.28, horizontal:true, fw:.34, rise:0}, prop:"bar"},
"Front Lever|Full front lever":{r:"barHang", p:{gw:.28, horizontal:true, fw:.07, rise:0}, prop:"bar"}
};

/* ---- props, drawn in 3D so they rotate with the figure ---- */
const PROPS3D = {
  floor: ()=> gridLines(),
  box:   ()=> [...gridLines(), ...boxLines(-0.75, 0, 0.55, 0.9)],
  boxBack: ()=> [...gridLines(), ...boxLines(-0.95, 0, 0.42, 0.9)],
  benchBack: ()=> [...gridLines(), ...boxLines(-0.95, 0, 0.52, 0.9)],
  bar:   ()=> [...gridLines(), [[-0.9,1.85,0],[0.9,1.85,0]]],
  lowbar:()=> [...gridLines(), [[-0.9,0.80,0],[0.9,0.80,0]], [[-0.9,1.05,0],[0.9,1.05,0]]]
};
function gridLines(){
  const g = [], n = 3, s = 0.42;
  for(let i=-n;i<=n;i++){
    g.push([[i*s, 0, -n*s],[i*s, 0, n*s]]);
    g.push([[-n*s, 0, i*s],[n*s, 0, i*s]]);
  }
  return g;
}
function boxLines(z, y0, h, w){
  const x = w/2, d = 0.42;
  const c = [[-x,y0,z-d],[x,y0,z-d],[x,y0,z+d],[-x,y0,z+d],
             [-x,y0+h,z-d],[x,y0+h,z-d],[x,y0+h,z+d],[-x,y0+h,z+d]];
  const e = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  return e.map(([a,b])=>[c[a],c[b]]);
}

/* ---- the bones, drawn back to front ---- */
const BONES = [
  ["sL","sR",5],["sL","hL",6],["sR","hR",6],["hL","hR",5],
  ["sL","eL",5],["eL","wL",5],["sR","eR",5],["eR","wR",5],
  ["hL","kL",6],["kL","aL",6],["hR","kR",6],["kR","aR",6]
];

const SVG_NS = "http://www.w3.org/2000/svg";
function make3D(host, key, label){
  const cfg = RIG3D[key];
  if(!cfg) return null;
  const wrap = document.createElement("div");
  wrap.className = "fig3d";
  wrap.innerHTML = '<svg viewBox="0 0 240 190" xmlns="' + SVG_NS + '">'
    + '<g class="p3"></g><g class="b3"></g></svg>'
    + '<p class="fig-cap">' + (label || "") + ' · drag to rotate</p>';
  host.append(wrap);

  const svg = wrap.querySelector("svg");
  const gp = svg.querySelector(".p3"), gb = svg.querySelector(".b3");
  const st = {yaw:-0.5, pitch:0.12, drag:false, lx:0, ly:0, auto:true};

  const project = (p)=>{
    const ca = Math.cos(st.yaw), sa = Math.sin(st.yaw);
    const x1 = p[0]*ca + p[2]*sa, z1 = -p[0]*sa + p[2]*ca;
    const cb = Math.cos(st.pitch), sb = Math.sin(st.pitch);
    const y2 = p[1]*cb - z1*sb, z2 = p[1]*sb + z1*cb;
    const k = 268 / (3.5 - z2*0.30);
    return [120 + x1*k, 172 - y2*k, z2];
  };
  const line = (g, a, b, w, cls)=>{
    const p1 = project(a), p2 = project(b);
    const el = document.createElementNS(SVG_NS, "line");
    el.setAttribute("x1", p1[0].toFixed(1)); el.setAttribute("y1", p1[1].toFixed(1));
    el.setAttribute("x2", p2[0].toFixed(1)); el.setAttribute("y2", p2[1].toFixed(1));
    const depth = (p1[2] + p2[2]) / 2;
    el.setAttribute("stroke-width", (w * (1 + depth*0.16)).toFixed(2));
    el.setAttribute("class", cls);
    el.style.opacity = Math.max(0.35, Math.min(1, 0.72 + depth*0.3)).toFixed(2);
    g.append(el);
  };

  const draw = (t)=>{
    const j = RIGS[cfg.r](cfg.p, t);
    gp.textContent = ""; gb.textContent = "";
    (PROPS3D[cfg.prop || "floor"] || PROPS3D.floor)().forEach(seg=> line(gp, seg[0], seg[1], 1.2, "p3l"));
    BONES.slice().sort((a,b)=>{
      const da = (j[a[0]][2] + j[a[1]][2]) / 2, db = (j[b[0]][2] + j[b[1]][2]) / 2;
      return da - db;
    }).forEach(([a,b,w])=>{ if(j[a] && j[b]) line(gb, j[a], j[b], w, "b3l"); });
    const h = project(j.head);
    const c = document.createElementNS(SVG_NS, "circle");
    c.setAttribute("cx", h[0].toFixed(1)); c.setAttribute("cy", h[1].toFixed(1));
    c.setAttribute("r", (B.head * 240 / (3.6 - h[2]*0.35)).toFixed(1));
    c.setAttribute("class", "b3h");
    gb.append(c);
    ["wL","wR","aL","aR"].forEach(k2=>{
      if(!j[k2]) return;
      const p = project(j[k2]);
      const d = document.createElementNS(SVG_NS, "circle");
      d.setAttribute("cx", p[0].toFixed(1)); d.setAttribute("cy", p[1].toFixed(1));
      d.setAttribute("r", "3.4"); d.setAttribute("class", "b3d");
      gb.append(d);
    });
  };

  const down = e=>{ st.drag = true; st.auto = false; const t = e.touches ? e.touches[0] : e;
    st.lx = t.clientX; st.ly = t.clientY; e.preventDefault(); };
  const move = e=>{
    if(!st.drag) return;
    const t = e.touches ? e.touches[0] : e;
    st.yaw += (t.clientX - st.lx) * 0.012;
    st.pitch = Math.max(-0.8, Math.min(0.9, st.pitch + (t.clientY - st.ly) * 0.006));
    st.lx = t.clientX; st.ly = t.clientY; e.preventDefault();
  };
  const up = ()=>{ st.drag = false; };
  svg.addEventListener("mousedown", down); svg.addEventListener("touchstart", down, {passive:false});
  window.addEventListener("mousemove", move); window.addEventListener("touchmove", move, {passive:false});
  window.addEventListener("mouseup", up); window.addEventListener("touchend", up);

  players.push({svg:svg, host:host, three:true, tick(now){
    if(st.auto) st.yaw = -0.5 + Math.sin(now / 3400) * 1.15;
    const cycle = 2600;
    let t = ((now % (cycle*2)) / cycle);
    if(t > 1) t = 2 - t;
    draw(t * t * (3 - 2*t));
  }});
  return wrap;
}
