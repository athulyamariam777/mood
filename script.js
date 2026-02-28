
// Activity data
const activityMap = {
  anxious: [
    {
      icon: '🌬️', name: 'Box Breathing', desc: 'Calm your nervous system in minutes.', duration: '4 min',
      steps: [
        { title: 'Find your space', text: 'Sit comfortably with your back straight. Place one hand on your chest, one on your belly.', note: 'You don\'t need to be anywhere special. This moment, right here, is enough.' },
        { title: 'Inhale', text: 'Breathe in slowly through your nose for 4 counts.', timer: 4 },
        { title: 'Hold', text: 'Hold your breath gently for 4 counts.', timer: 4 },
        { title: 'Exhale', text: 'Release slowly through your mouth for 4 counts.', timer: 4 },
        { title: 'Hold again', text: 'Pause for 4 counts before your next breath.', timer: 4 },
        { title: 'Repeat', text: 'Continue this pattern for 3–5 cycles. Notice how your body begins to soften.', note: 'With each breath, anxiety has a little less grip. You are safe.' }
      ]
    },
    {
      icon: '✍️', name: 'Worry Dump', desc: 'Empty your mind onto the page.', duration: '5 min',
      steps: [
        { title: 'Get ready', text: 'Grab paper or open a notes app. There\'s no right way to do this.', note: 'What you\'re about to do is an act of self-compassion.' },
        { title: 'Set a timer', text: 'Give yourself 5 uninterrupted minutes to write down every worry swirling in your mind.', note: 'Don\'t edit, don\'t judge. Just let it pour out.' },
        { title: 'Sort it out', text: 'Look at your list. Circle what you can actually control. Let the rest go for now.', note: 'Most worries live in the future. Right now, you are okay.' },
        { title: 'One small step', text: 'Pick ONE circled item. Write down one tiny action you could take today.', note: 'Anxiety wants you paralyzed. One step breaks that spell.' }
      ]
    },
    {
      icon: '🖐️', name: '5-4-3-2-1 Grounding', desc: 'Come back to the present moment.', duration: '3 min',
      steps: [
        { title: 'Start here', text: 'Look around you and name 5 things you can see.', note: 'Say them out loud if you can.' },
        { title: 'Touch', text: 'Notice 4 things you can physically feel right now — your clothes, the chair, the temperature of the air.', note: '' },
        { title: 'Listen', text: 'Name 3 sounds you can hear. Near and far.', note: '' },
        { title: 'Smell & taste', text: 'Notice 2 things you can smell, and 1 thing you can taste.', note: 'You have returned to this moment. Anxiety cannot live here.' }
      ]
    },
    {
      icon: '🚶‍♀️', name: 'Mindful Walk', desc: 'Move the anxious energy through you.', duration: '10 min',
      steps: [
        { title: 'Step outside', text: 'Even 5 minutes in natural light or open air can shift your nervous system.', note: 'You don\'t need a plan or a destination.' },
        { title: 'Feel your feet', text: 'With each step, notice the ground beneath you. Heel, arch, toe. Steady. Present.', note: '' },
        { title: 'Open your senses', text: 'Notice one beautiful or interesting thing every 60 seconds — a color, a texture, a sound.', note: 'Anxiety shrinks when we make space for wonder.' },
        { title: 'Return', text: 'As you head back, take three deep breaths. Thank yourself for showing up.', note: 'You did something good for yourself today.' }
      ]
    }
  ],
  tired: [
    {
      icon: '🫀', name: 'Energy Breath', desc: 'A gentle pick-me-up for body and mind.', duration: '3 min',
      steps: [
        { title: 'Sit up', text: 'Sit tall in your seat, feet flat on the floor. Roll your shoulders back and down.', note: 'Posture signals to your brain: I\'m ready.' },
        { title: 'Breathe of fire', text: 'Take a deep inhale, then exhale sharply through the nose 10 times in quick succession.', timer: 15 },
        { title: 'Reset', text: 'Take one long, slow breath in. Hold for a moment. Release fully.', note: 'Repeat this cycle 3 times.' },
        { title: 'Check in', text: 'Notice how your body feels now. A little warmer? More awake? That\'s your breath doing its work.', note: '' }
      ]
    },
    {
      icon: '🌿', name: 'Body Scan', desc: 'Release tension you didn\'t know you held.', duration: '7 min',
      steps: [
        { title: 'Lie or sit', text: 'Get comfortable. Close your eyes if you\'d like. Take three slow breaths.', note: '' },
        { title: 'Start at your feet', text: 'Bring awareness to your toes, ankles, calves. Breathe into any tension and let it melt.', timer: 30 },
        { title: 'Move upward', text: 'Continue through your hips, belly, chest, shoulders, neck, and face. Soften as you go.', timer: 45 },
        { title: 'Whole body', text: 'Feel your whole body at once. Heavy and warm. Supported and still.', note: 'Rest isn\'t laziness. It\'s how you come back whole.' }
      ]
    },
    {
      icon: '💧', name: 'Hydrate & Reset', desc: 'A simple ritual to nourish yourself.', duration: '5 min',
      steps: [
        { title: 'Get water', text: 'Pour yourself a full glass of water. This is an act of care.', note: 'Fatigue is often dehydration in disguise.' },
        { title: 'Drink slowly', text: 'Take slow, intentional sips. Feel the coolness. Be present with it.', timer: 60 },
        { title: 'Move a little', text: 'Stand up. Roll your neck, shake out your hands, stretch your arms overhead.', note: '' },
        { title: 'One thing', text: 'Ask yourself: what is the ONE most important thing I can do right now? Just that. Nothing else.', note: 'Tiredness often comes from doing too many things at once.' }
      ]
    },
    {
      icon: '☀️', name: 'Power Nap Prep', desc: 'Rest with intention.', duration: '20 min',
      steps: [
        { title: 'Set your timer', text: 'Set an alarm for 18–20 minutes. Longer and you\'ll wake groggier.', note: 'This is a science-backed reset — not giving up.' },
        { title: 'Create your nest', text: 'Dim the lights if you can. Get comfortable. An eye mask or quiet music helps.', note: '' },
        { title: 'Let go', text: 'Close your eyes. You don\'t need to actually sleep — just rest. Release every thought as it comes.', timer: 60 },
        { title: 'Wake gently', text: 'When your alarm rings, sit up slowly. Drink water. Give yourself a minute before diving back in.', note: 'You gave your brain a gift. It will repay you.' }
      ]
    }
  ],
  sad: [
    {
      icon: '🤗', name: 'Self-Compassion Practice', desc: 'Hold yourself with kindness.', duration: '5 min',
      steps: [
        { title: 'Acknowledge', text: 'Place one hand on your heart. Say to yourself: "This is a moment of suffering. I\'m not alone in this feeling."', note: 'You don\'t have to fix how you feel. Just let it be real.' },
        { title: 'Breathe', text: 'Take three slow breaths into the hand on your heart. Warm. Kind. Present.', timer: 20 },
        { title: 'Kindness words', text: 'Say silently or aloud: "May I be gentle with myself. May I have what I need. May I feel better soon."', note: 'You deserve the same tenderness you\'d give a dear friend.' },
        { title: 'Stay with it', text: 'Sit for a moment. Let whatever comes come. Sadness is not weakness — it\'s depth.', note: '' }
      ]
    },
    {
      icon: '🎵', name: 'Sound Healing', desc: 'Let music move what\'s stuck.', duration: '8 min',
      steps: [
        { title: 'Choose your song', text: 'Pick a song that truly matches how you feel right now. Don\'t reach for happy yet.', note: 'Letting music meet you where you are is more healing than bypassing your feelings.' },
        { title: 'Really listen', text: 'Close your eyes. Let the music wash over you. Notice where you feel it in your body.', timer: 240 },
        { title: 'Shift gently', text: 'Choose one song that is slightly more hopeful or peaceful. Let it carry you forward.', note: '' },
        { title: 'Reflect', text: 'How do you feel? Write one sentence about what you noticed.', note: 'Music is medicine. You just dosed yourself.' }
      ]
    },
    {
      icon: '📞', name: 'Reach Out', desc: 'Connection is medicine.', duration: '10 min',
      steps: [
        { title: 'Think of one person', text: 'Who makes you feel safe? Who wouldn\'t need you to explain everything?', note: 'You don\'t have to be in crisis to reach out. "I\'m feeling low, can we talk?" is enough.' },
        { title: 'Send a message', text: 'Text, call, or voice note them now. It doesn\'t need to be long.', note: '' },
        { title: 'If that feels hard', text: 'Write a letter you don\'t have to send. Express what you wish someone knew.', note: 'Loneliness is one of the heaviest feelings. You deserve to be witnessed.' },
        { title: 'Be kind to yourself', text: 'You reached out — or thought about it. That\'s courage. That\'s care for yourself.', note: '' }
      ]
    },
    {
      icon: '🌸', name: 'Gentle Movement', desc: 'Shake the heaviness from your body.', duration: '10 min',
      steps: [
        { title: 'Start where you are', text: 'You don\'t need a yoga mat or workout clothes. Just stand up if you can.', note: 'When emotions feel stuck, your body is the doorway.' },
        { title: 'Shake it', text: 'Literally shake your hands, your arms, your hips. Let it be silly. Shake for one minute.', timer: 60 },
        { title: 'Slow stretch', text: 'Roll your shoulders forward and back. Stretch your arms up. Let your head fall gently side to side.', timer: 60 },
        { title: 'Dance if you want', text: 'One song. Move however your body wants to. No rules.', note: 'Sadness is allowed to live in your body for a while. Movement helps it move through.' }
      ]
    }
  ],
  stressed: [
    {
      icon: '🧘', name: 'Progressive Relaxation', desc: 'Release stress from every muscle.', duration: '8 min',
      steps: [
        { title: 'Get comfortable', text: 'Sit or lie down. Take a few deep, slow breaths to begin.', note: '' },
        { title: 'Tense & release', text: 'Start with your feet. Squeeze as tight as you can for 5 seconds, then completely let go.', timer: 5 },
        { title: 'Move upward', text: 'Continue: calves, thighs, belly, hands, arms, shoulders, face. Tense 5 seconds, release.', timer: 60 },
        { title: 'Full release', text: 'Feel your whole body soft and heavy. Breathe here for a minute. This is what release feels like.', timer: 60, note: 'Stress lives in the body. You just gave your body permission to let go.' }
      ]
    },
    {
      icon: '📋', name: 'Brain Dump & Sort', desc: 'Untangle the mental chaos.', duration: '10 min',
      steps: [
        { title: 'Write everything', text: 'Set a timer for 3 minutes. Write every single task, worry, and "should" in your head. Everything.', timer: 180 },
        { title: 'Sort by urgency', text: 'Draw two columns: Urgent Today / Can Wait. Move each item to its home.', note: 'Most things are not actually urgent. Your brain just treats them that way.' },
        { title: 'Pick your 3', text: 'Circle only 3 tasks for today. That\'s it. Everything else is tomorrow\'s problem.', note: '' },
        { title: 'Breathe', text: 'Take five slow breaths. You have a plan. You can do this. One thing at a time.', note: 'Clarity is the antidote to overwhelm.' }
      ]
    },
    {
      icon: '🍵', name: 'Tea Meditation', desc: 'Slow down with a warm ritual.', duration: '10 min',
      steps: [
        { title: 'Prepare your drink', text: 'Make tea, coffee, or warm water with lemon. Do it slowly and with intention.', note: 'This is not just a drink. It\'s a pause.' },
        { title: 'Hold the cup', text: 'Sit down. Hold your cup in both hands. Feel the warmth. Breathe in the scent.', note: '' },
        { title: 'Sip slowly', text: 'Take the slowest sips you\'ve taken all day. No phone. No screen. Just this.', timer: 180 },
        { title: 'Set an intention', text: 'After your last sip, set one gentle intention for the rest of today. Not a goal — a way of being.', note: 'e.g. "I will be gentle with myself." "I will focus on one thing at a time."' }
      ]
    },
    {
      icon: '🌊', name: 'Cold Splash Reset', desc: 'Shock your system (gently) back to calm.', duration: '2 min',
      steps: [
        { title: 'Go to a sink', text: 'Run cool or cold water. This activates your body\'s dive reflex — an instant calm signal.', note: '' },
        { title: 'Splash your face', text: 'Cup cold water and splash your face 5–10 times. Slow and steady.', timer: 30 },
        { title: 'Wrists too', text: 'Run cool water over the inside of your wrists for 30 seconds.', timer: 30 },
        { title: 'Breathe & look up', text: 'Pat your face dry. Take three slow breaths. Look up. You just reset your nervous system.', note: 'Your body is incredibly intelligent. You just used it.' }
      ]
    }
  ],
  happy: [
    {
      icon: '✨', name: 'Gratitude Practice', desc: 'Deepen and anchor this joy.', duration: '5 min',
      steps: [
        { title: 'Sit with it', text: 'Close your eyes. Let the good feeling settle in your body. Where do you feel joy?', note: 'Joy is a muscle. Let\'s strengthen it.' },
        { title: 'Name 5 things', text: 'Write or say aloud 5 specific things you\'re grateful for right now. Be specific, not general.', note: '"My friend sent me a funny voice note" not just "friends".' },
        { title: 'Savor one', text: 'Pick one gratitude. Close your eyes and spend one full minute reliving it in vivid detail.', timer: 60 },
        { title: 'Spread it', text: 'Send a quick message to someone who contributes to your happiness. Let them know.', note: 'Happiness shared multiplies.' }
      ]
    },
    {
      icon: '🎨', name: 'Creative Expression', desc: 'Let your joy pour into something.', duration: '15 min',
      steps: [
        { title: 'Choose your medium', text: 'Drawing, writing, dancing, singing, cooking — what would feel playful right now?', note: '' },
        { title: 'Make something', text: 'Set a timer for 10–15 minutes and create something just for the joy of it. No goals.', timer: 600 },
        { title: 'Step back', text: 'Look at what you made. Even if it\'s "bad" — you made something from joy.', note: 'Creativity is not about perfection. It\'s about aliveness.' },
        { title: 'Celebrate', text: 'Take a moment to feel proud. You made time for joy. That\'s radical self-care.', note: '' }
      ]
    },
    {
      icon: '🏃‍♀️', name: 'Joy Movement', desc: 'Ride this energy in your body.', duration: '10 min',
      steps: [
        { title: 'Let it out', text: 'Put on a song that matches your energy. Stand up.', note: '' },
        { title: 'Dance it', text: 'Move freely for 5–10 minutes. Let your body express what words can\'t.', timer: 300 },
        { title: 'Cool down', text: 'Slow your movement to match a gentler song. Feel the joy settle into your body.', note: '' },
        { title: 'Breathe it in', text: 'Put your hand on your heart. You are alive and you feel good. Remember this moment.', note: 'Joy is worth celebrating fully.' }
      ]
    },
    {
      icon: '💌', name: 'Kindness Ripple', desc: 'Spread what you\'re feeling.', duration: '10 min',
      steps: [
        { title: 'Think of 3 people', text: 'Who in your life could use a lift today? Or who has helped you recently?', note: '' },
        { title: 'Send a message', text: 'Send each person a genuine, specific message of appreciation or care.', timer: 300 },
        { title: 'Do one small thing', text: 'Is there a kind act you can do in person today — for a stranger or someone you love?', note: '' },
        { title: 'Feel the full circle', text: 'Kindness given is kindness felt. You\'ve now made the world a little warmer.', note: 'Happy people who share their happiness create more of it.' }
      ]
    }
  ],
  overwhelmed: [
    {
      icon: '🛑', name: 'Permission to Pause', desc: 'It\'s okay to stop.', duration: '5 min',
      steps: [
        { title: 'Stop', text: 'Put down what you\'re doing. Close the tabs. Set your phone face-down.', note: 'You have permission to stop. Nothing will fall apart in the next 5 minutes.' },
        { title: 'Breathe slowly', text: 'Inhale for 4, exhale for 6. The longer exhale activates your rest response.', timer: 60 },
        { title: 'Say it', text: 'Say aloud or in your head: "I am doing my best. I don\'t have to do everything."', note: '' },
        { title: 'One thing', text: 'What is the single most important thing to do in the next hour? Only that. Everything else waits.', note: 'Overwhelm shrinks when you give it a single direction.' }
      ]
    },
    {
      icon: '🗂️', name: 'Triage Method', desc: 'Sort the chaos into clarity.', duration: '10 min',
      steps: [
        { title: 'List everything', text: 'Write every single thing weighing on your mind. Take 3 minutes, no filters.', timer: 180 },
        { title: 'Three buckets', text: 'Label each item: Now (must do today), Later (this week), Never (doesn\'t actually matter).', note: 'You\'ll be surprised how much belongs in "Never".' },
        { title: 'Now list', text: 'From your "Now" items, pick only 2–3. Those are today. Close your notebook.', note: '' },
        { title: 'Breathe out', text: 'Take a slow breath. You have a plan. The rest will get done — just not all today.', note: '' }
      ]
    },
    {
      icon: '🌱', name: 'Nourish First', desc: 'Care for your body before your tasks.', duration: '10 min',
      steps: [
        { title: 'Basic check', text: 'Have you eaten? Drank water? Slept? Been outside today? Pick the one you\'ve neglected most.', note: 'Overwhelm is often exhaustion and blood sugar in disguise.' },
        { title: 'Nourish it', text: 'Eat something real. Drink water. Step outside for 3 minutes. Rest for 10.', timer: 180 },
        { title: 'Breathe in fresh air', text: 'If you can, stand near a window or step outside. Look up at the sky for a moment.', note: '' },
        { title: 'Return gently', text: 'Come back to your work with a body that\'s been cared for. You\'ll do better work.', note: 'You cannot pour from an empty cup.' }
      ]
    },
    {
      icon: '🧎', name: 'Surrender Stretch', desc: 'Let your body release control.', duration: '5 min',
      steps: [
        { title: 'Child\'s Pose', text: 'Kneel on the floor. Sit your hips back, extend your arms forward, rest your forehead down.', note: 'If this isn\'t possible, just fold forward in your chair, arms dangling.' },
        { title: 'Stay & breathe', text: 'Breathe deeply into your back. Feel the ground supporting you. You don\'t have to hold anything up.', timer: 60 },
        { title: 'Sigh it out', text: 'Take a deep inhale, and release it with an audible sigh. Do this 5 times.', timer: 30 },
        { title: 'Rise slowly', text: 'Come up gently. How do you feel in your body now versus before?', note: 'Surrendering for a moment gives you the strength to continue.' }
      ]
    }
  ],
  hopeful: [
    {
      icon: '🌟', name: 'Vision Writing', desc: 'Give your hope a direction.', duration: '10 min',
      steps: [
        { title: 'Sit with possibility', text: 'Take three deep, happy breaths. Feel the warmth of hope in your chest.', note: '' },
        { title: 'Write freely', text: 'For 7 minutes, write about what you hope for. Don\'t limit it. Dream without editing.', timer: 420 },
        { title: 'Find the seed', text: 'Look at what you wrote. What\'s one small step you could take this week toward that vision?', note: '' },
        { title: 'Set it in motion', text: 'Write the step down and schedule a specific time to do it.', note: 'Hope is the beginning. Action is the bridge.' }
      ]
    },
    {
      icon: '🌻', name: 'Morning Pages', desc: 'Channel your optimism into words.', duration: '10 min',
      steps: [
        { title: 'Get your pen', text: 'Write continuously for 10 minutes — stream of consciousness, no stopping.', note: 'No wrong way. No editing. Just write what flows.' },
        { title: 'Write', text: 'Let your hopeful thoughts lead. Where do they take you?', timer: 600 },
        { title: 'Read back', text: 'Read what you wrote. Underline any line that surprises or excites you.', note: '' },
        { title: 'Choose one', text: 'Let one underlined insight be a guiding thought for today.', note: 'Your inner voice has wisdom. Writing lets it speak.' }
      ]
    },
    {
      icon: '☀️', name: 'Affirmation Ritual', desc: 'Anchor your hope with words.', duration: '5 min',
      steps: [
        { title: 'Stand tall', text: 'Stand in front of a mirror if you can. Take a strong, grounded breath.', note: '' },
        { title: 'Speak your truths', text: 'Say these slowly and with belief: "I am capable. I am becoming. I am enough. Good things are coming."', note: '' },
        { title: 'Add your own', text: 'Write one affirmation that\'s specifically true for you right now. Something you deeply want to believe.', note: '' },
        { title: 'Carry it', text: 'Write your affirmation on your hand or a sticky note. Let it travel with you today.', note: 'What we tell ourselves shapes what we become.' }
      ]
    }
  ],
  irritable: [
    {
      icon: '🔥', name: 'Release Breath', desc: 'Channel the intensity through breath.', duration: '4 min',
      steps: [
        { title: 'Acknowledge it', text: 'Say to yourself: "I\'m irritable right now and that\'s okay. My feelings are valid."', note: 'Irritability is often a signal, not a flaw.' },
        { title: 'Exhale hard', text: 'Take a big inhale, then blast it out through your mouth. Do this 5 times.', timer: 30 },
        { title: 'Slow down', text: 'Now breathe in for 4 counts, out for 8. The long exhale soothes.', timer: 60 },
        { title: 'Ask yourself', text: 'What\'s actually underneath the irritability? Hunger? Tired? Overwhelmed? Unmet need?', note: 'Irritability is usually the surface. Compassion for the cause changes everything.' }
      ]
    },
    {
      icon: '🥊', name: 'Shake & Release', desc: 'Move the energy out of your body.', duration: '5 min',
      steps: [
        { title: 'Stand up', text: 'Get somewhere private if possible. Take a strong, intentional stance.', note: '' },
        { title: 'Shake your body', text: 'Shake your hands, arms, legs. Literally shake as hard and fast as you can for 1 minute.', timer: 60 },
        { title: 'Punch the air', text: 'If you feel it — punch the air. Let out a sound if you have one. 30 seconds.', timer: 30 },
        { title: 'Slow and soften', text: 'Let the movement slow down. Roll your shoulders. Breathe deeply. Feel the difference.', note: 'Your body stored that emotion. You just moved it through.' }
      ]
    },
    {
      icon: '🌿', name: 'Sensory Reset', desc: 'Calm your overstimulated system.', duration: '5 min',
      steps: [
        { title: 'Find quiet', text: 'Remove yourself from the stimulation if you can — even stepping into a bathroom counts.', note: '' },
        { title: 'Cold water', text: 'Run cold water over your wrists and forearms for 30 seconds.', timer: 30 },
        { title: 'Smell something calming', text: 'Lavender, citrus, or even fresh air — find a scent and breathe it in slowly.', note: '' },
        { title: 'Set a boundary', text: 'Identify one thing you can reduce or remove from your environment to create more ease right now.', note: 'You\'re allowed to adjust your environment to take care of yourself.' }
      ]
    }
  ]
};

// Fallback activities for custom emotions
const fallbackActivities = activityMap.anxious;

let currentEmotion = '';
let currentActivity = null;
let currentStep = 0;
let timerInterval = null;
let timerRemaining = 0;

// Set date
const now = new Date();
document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

function selectEmotion(btn, emotion) {
  document.querySelectorAll('.emotion-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('emotion-input').value = emotion;
}

function showActivities() {
  const input = document.getElementById('emotion-input').value.trim().toLowerCase();
  if (!input) {
    document.getElementById('emotion-input').style.borderColor = 'var(--rose)';
    document.getElementById('emotion-input').focus();
    setTimeout(() => document.getElementById('emotion-input').style.borderColor = '', 1500);
    return;
  }

  currentEmotion = input;

  // Find closest match
  let activities = fallbackActivities;
  for (const key of Object.keys(activityMap)) {
    if (input.includes(key) || key.includes(input)) {
      activities = activityMap[key];
      break;
    }
  }

  // Display
  document.getElementById('emotion-display').textContent = input;
  const container = document.getElementById('activity-cards');
  container.innerHTML = '';

  activities.forEach((act, i) => {
    const card = document.createElement('div');
    card.className = 'activity-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <span class="activity-icon">${act.icon}</span>
      <div class="activity-name">${act.name}</div>
      <div class="activity-desc">${act.desc}</div>
      <span class="activity-duration">⏱ ${act.duration}</span>
    `;
    card.onclick = () => startActivity(act);
    container.appendChild(card);
  });

  document.getElementById('checkin-card').style.display = 'none';
  const section = document.getElementById('activities-section');
  section.classList.add('visible');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function startActivity(activity) {
  currentActivity = activity;
  currentStep = 0;
  clearTimer();

  document.getElementById('modal-icon').textContent = activity.icon;
  document.getElementById('modal-title').textContent = activity.name;
  document.getElementById('modal-subtitle').textContent = activity.desc + ' — ' + activity.duration;

  // Build step dots
  const indicator = document.getElementById('step-indicator');
  indicator.innerHTML = '';
  activity.steps.forEach(() => {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    indicator.appendChild(dot);
  });

  renderStep();
  document.getElementById('guided-modal').classList.add('open');
}

function renderStep() {
  const step = currentActivity.steps[currentStep];
  const total = currentActivity.steps.length;
  clearTimer();

  // Update dots
  document.querySelectorAll('.step-dot').forEach((dot, i) => {
    dot.className = 'step-dot' + (i <= currentStep ? ' done' : '');
  });

  let html = `<div class="step-number">Step ${currentStep + 1} of ${total} — ${step.title}</div>`;
  html += `<p class="step-text">${step.text}</p>`;

  if (step.timer) {
    html += `
      <div class="timer-ring" id="timer-ring">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle class="timer-circle-bg" cx="60" cy="60" r="50"/>
          <circle class="timer-circle" id="timer-arc" cx="60" cy="60" r="50"/>
        </svg>
        <span class="timer-text" id="timer-text">${step.timer}s</span>
      </div>
    `;
  }

  if (step.note) {
    html += `<div class="step-note">${step.note}</div>`;
  }

  document.getElementById('step-content').innerHTML = html;

  // Back button
  document.getElementById('btn-back').style.display = currentStep === 0 ? 'none' : 'block';

  // Next label
  const isLast = currentStep === total - 1;
  document.getElementById('btn-next-label').textContent = isLast ? 'Finish ✓' : 'Continue →';

  if (step.timer) {
    startTimer(step.timer);
  }
}

function startTimer(seconds) {
  timerRemaining = seconds;
  const arc = document.getElementById('timer-arc');
  const label = document.getElementById('timer-text');
  const circumference = 314;

  arc.style.strokeDashoffset = 0;

  timerInterval = setInterval(() => {
    timerRemaining--;
    const progress = timerRemaining / seconds;
    arc.style.strokeDashoffset = circumference * (1 - progress);
    label.textContent = timerRemaining + 's';
    if (timerRemaining <= 0) clearTimer();
  }, 1000);
}

function clearTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function nextStep() {
  if (currentStep < currentActivity.steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    showCompletion();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function showCompletion() {
  clearTimer();
  document.getElementById('step-indicator').innerHTML = '';
  document.getElementById('step-content').innerHTML = `
    <div class="completion">
      <span class="big-icon">🌸</span>
      <h3>Beautiful work.</h3>
      <p>You showed up for yourself today. That is never a small thing.<br><br>Carry this moment with you.</p>
    </div>
  `;
  document.getElementById('modal-nav').innerHTML = `
    <button class="btn-next" style="flex:1" onclick="closeModal()"><span>Close & Rest ✦</span></button>
  `;
}

function closeModal() {
  clearTimer();
  document.getElementById('guided-modal').classList.remove('open');
}

function resetCheckin() {
  document.getElementById('checkin-card').style.display = 'block';
  document.getElementById('activities-section').classList.remove('visible');
  document.getElementById('emotion-input').value = '';
  document.querySelectorAll('.emotion-pill').forEach(p => p.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close modal on backdrop click
document.getElementById('guided-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});