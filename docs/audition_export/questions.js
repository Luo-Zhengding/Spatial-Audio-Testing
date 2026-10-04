window.AUDITION_DATA = {
  "title": "AudioWorldSim Spatial Audio Quiz",
  "blind": false,
  "questionCount": 39,
  "questions": [
    {
      "id": "q001",
      "type": "T1",
      "question": "The audio below contains one stationary source. Is the source on your left or on your right?",
      "options": [
        "on your left",
        "on your right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q001_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000001",
      "scoreRole": "perception_baseline",
      "scoreRoleLabel": "Perception baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q002",
      "type": "T3",
      "question": "The source starts directly in front of you or behind you and stays fixed. Follow the timeline. Choose the option that gives its start position, its distance change after the move, and its final side.",
      "options": [
        "Start: front; after move: closer; end: left",
        "Start: front; after move: closer; end: right",
        "Start: front; after move: farther; end: left",
        "Start: front; after move: farther; end: right",
        "Start: back; after move: closer; end: left",
        "Start: back; after move: closer; end: right",
        "Start: back; after move: farther; end: left",
        "Start: back; after move: farther; end: right"
      ],
      "answerIndex": 4,
      "audio": [
        "audio/q002_a.wav?v=a0869ff6311f"
      ],
      "timeline": [
        {
          "start": 0.0,
          "end": 3.0,
          "label": "Turn 30° left",
          "kind": "action"
        },
        {
          "start": 3.0,
          "end": 4.0,
          "label": "Silence",
          "kind": "silence"
        },
        {
          "start": 4.0,
          "end": 7.0,
          "label": "Move 1.2 m backward",
          "kind": "action"
        },
        {
          "start": 7.0,
          "end": 8.0,
          "label": "Silence",
          "kind": "silence"
        },
        {
          "start": 8.0,
          "end": 11.0,
          "label": "Turn 45° left",
          "kind": "action"
        }
      ],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000002",
      "scoreRole": "diagnostic",
      "scoreRoleLabel": "Diagnostic",
      "includeInCoreScore": false,
      "answerComponents": {
        "initial_front_back": "back",
        "translation_range": "closer",
        "final_side": "left"
      },
      "optionComponents": [
        {
          "initial_front_back": "front",
          "translation_range": "closer",
          "final_side": "left"
        },
        {
          "initial_front_back": "front",
          "translation_range": "closer",
          "final_side": "right"
        },
        {
          "initial_front_back": "front",
          "translation_range": "farther",
          "final_side": "left"
        },
        {
          "initial_front_back": "front",
          "translation_range": "farther",
          "final_side": "right"
        },
        {
          "initial_front_back": "back",
          "translation_range": "closer",
          "final_side": "left"
        },
        {
          "initial_front_back": "back",
          "translation_range": "closer",
          "final_side": "right"
        },
        {
          "initial_front_back": "back",
          "translation_range": "farther",
          "final_side": "left"
        },
        {
          "initial_front_back": "back",
          "translation_range": "farther",
          "final_side": "right"
        }
      ]
    },
    {
      "id": "q003",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 45 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q003_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000003",
      "baseItemId": "pair_000003",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q004",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q004_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000004",
      "baseItemId": "pair_000004",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q005",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q005_a.wav?v=a0869ff6311f",
        "audio/q005_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000005",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q006",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 45 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q006_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000006",
      "baseItemId": "pair_000006",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q007",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q007_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000007",
      "baseItemId": "pair_000007",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q008",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q008_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000008",
      "baseItemId": "pair_000008",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q009",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 45 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q009_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000003",
      "baseItemId": "pair_000003",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q010",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q010_a.wav?v=a0869ff6311f",
        "audio/q010_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000009",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q011",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q011_a.wav?v=a0869ff6311f",
        "audio/q011_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000010",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q012",
      "type": "T1_distance",
      "question": "Recordings A and B use the same source, direction, room, and emitted power. Only the distance may differ. Is the source much closer in Recording A, much closer in Recording B, or at about the same distance in both?",
      "options": [
        "the source is much closer in Recording A",
        "the source is much closer in Recording B",
        "the source is at about the same distance in Recordings A and B"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q012_a.wav?v=a0869ff6311f",
        "audio/q012_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000011",
      "scoreRole": "distance_baseline",
      "scoreRoleLabel": "Distance baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q013",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q013_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000012",
      "baseItemId": "pair_000012",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q014",
      "type": "T1",
      "question": "The audio below contains one stationary source. Is the source on your left or on your right?",
      "options": [
        "on your left",
        "on your right"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q014_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000013",
      "scoreRole": "perception_baseline",
      "scoreRoleLabel": "Perception baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q015",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q015_a.wav?v=a0869ff6311f",
        "audio/q015_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000014",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q016",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q016_a.wav?v=a0869ff6311f",
        "audio/q016_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000015",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q017",
      "type": "T2_translation",
      "question": "Recording A is before you move. Keep facing the same direction and move 1.50 metres forward. Recording B is after the move. The source does not move. Is the source closer or farther away in Recording B?",
      "options": [
        "the source is closer in Recording B",
        "the source is farther away in Recording B"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q017_a.wav?v=a0869ff6311f",
        "audio/q017_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000016",
      "scoreRole": "distance_baseline",
      "scoreRoleLabel": "Distance baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q018",
      "type": "T2_translation",
      "question": "Recording A is before you move. Keep facing the same direction and move 1.24 metres backward. Recording B is after the move. The source does not move. Is the source closer or farther away in Recording B?",
      "options": [
        "the source is closer in Recording B",
        "the source is farther away in Recording B"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q018_a.wav?v=a0869ff6311f",
        "audio/q018_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000017",
      "scoreRole": "distance_baseline",
      "scoreRoleLabel": "Distance baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q019",
      "type": "T1",
      "question": "The audio below contains one stationary source. Is the source on your left or on your right?",
      "options": [
        "on your left",
        "on your right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q019_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000018",
      "scoreRole": "perception_baseline",
      "scoreRoleLabel": "Perception baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q020",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q020_a.wav?v=a0869ff6311f",
        "audio/q020_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000019",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q021",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q021_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000004",
      "baseItemId": "pair_000004",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q022",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q022_a.wav?v=a0869ff6311f",
        "audio/q022_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000020",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q023",
      "type": "T3",
      "question": "The source starts directly in front of you or behind you and stays fixed. Follow the timeline. Choose the option that gives its start position, its distance change after the move, and its final side.",
      "options": [
        "Start: front; after move: closer; end: left",
        "Start: front; after move: closer; end: right",
        "Start: front; after move: farther; end: left",
        "Start: front; after move: farther; end: right",
        "Start: back; after move: closer; end: left",
        "Start: back; after move: closer; end: right",
        "Start: back; after move: farther; end: left",
        "Start: back; after move: farther; end: right"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q023_a.wav?v=a0869ff6311f"
      ],
      "timeline": [
        {
          "start": 0.0,
          "end": 3.0,
          "label": "Turn 60° right",
          "kind": "action"
        },
        {
          "start": 3.0,
          "end": 4.0,
          "label": "Silence",
          "kind": "silence"
        },
        {
          "start": 4.0,
          "end": 7.0,
          "label": "Move 1.4 m backward",
          "kind": "action"
        },
        {
          "start": 7.0,
          "end": 8.0,
          "label": "Silence",
          "kind": "silence"
        },
        {
          "start": 8.0,
          "end": 11.0,
          "label": "Turn 30° right",
          "kind": "action"
        }
      ],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000021",
      "scoreRole": "diagnostic",
      "scoreRoleLabel": "Diagnostic",
      "includeInCoreScore": false,
      "answerComponents": {
        "initial_front_back": "front",
        "translation_range": "farther",
        "final_side": "left"
      },
      "optionComponents": [
        {
          "initial_front_back": "front",
          "translation_range": "closer",
          "final_side": "left"
        },
        {
          "initial_front_back": "front",
          "translation_range": "closer",
          "final_side": "right"
        },
        {
          "initial_front_back": "front",
          "translation_range": "farther",
          "final_side": "left"
        },
        {
          "initial_front_back": "front",
          "translation_range": "farther",
          "final_side": "right"
        },
        {
          "initial_front_back": "back",
          "translation_range": "closer",
          "final_side": "left"
        },
        {
          "initial_front_back": "back",
          "translation_range": "closer",
          "final_side": "right"
        },
        {
          "initial_front_back": "back",
          "translation_range": "farther",
          "final_side": "left"
        },
        {
          "initial_front_back": "back",
          "translation_range": "farther",
          "final_side": "right"
        }
      ]
    },
    {
      "id": "q024",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q024_a.wav?v=a0869ff6311f",
        "audio/q024_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000022",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q025",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q025_a.wav?v=a0869ff6311f",
        "audio/q025_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000023",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q026",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 45 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q026_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000006",
      "baseItemId": "pair_000006",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q027",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q027_a.wav?v=a0869ff6311f",
        "audio/q027_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000024",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q028",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q028_a.wav?v=a0869ff6311f",
        "audio/q028_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000025",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q029",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q029_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000012",
      "baseItemId": "pair_000012",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q030",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees right. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q030_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000008",
      "baseItemId": "pair_000008",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q031",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q031_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000007",
      "baseItemId": "pair_000007",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q032",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q032_a.wav?v=a0869ff6311f",
        "audio/q032_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000026",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q033",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q033_a.wav?v=a0869ff6311f",
        "audio/q033_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000027",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q034",
      "type": "T2_fb",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q034_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "unguided",
      "promptPairId": "pair_000028",
      "baseItemId": "pair_000028",
      "scoreRole": "core",
      "scoreRoleLabel": "Core audio-grounded score",
      "includeInCoreScore": true,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q035",
      "type": "T2_fb_guided",
      "question": "Before you turned, the source was directly in front of you or behind you. You turned 60 degrees left. The source did not move. The audio below is after the turn. Where was the source before the turn?",
      "options": [
        "in front of you before the turn",
        "behind you before the turn"
      ],
      "answerIndex": 1,
      "audio": [
        "audio/q035_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "If the sound is on the same side as your turn, the source began behind you. If it is on the opposite side, the source began in front of you.",
      "promptCondition": "guided",
      "promptPairId": "pair_000028",
      "baseItemId": "pair_000028",
      "scoreRole": "prompt_control",
      "scoreRoleLabel": "Guided prompt control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q036",
      "type": "T1",
      "question": "The audio below contains one stationary source. Is the source on your left or on your right?",
      "options": [
        "on your left",
        "on your right"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q036_a.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000029",
      "scoreRole": "perception_baseline",
      "scoreRoleLabel": "Perception baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q037",
      "type": "T2_turn_inference",
      "question": "The source stayed fixed while you turned in place. Recording A is before the turn and Recording B is after it. Based on how the source position changes from A to B, did you turn left or right?",
      "options": [
        "you turned left",
        "you turned right"
      ],
      "answerIndex": 0,
      "audio": [
        "audio/q037_a.wav?v=a0869ff6311f",
        "audio/q037_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000030",
      "scoreRole": "candidate",
      "scoreRoleLabel": "Candidate task (not yet validated)",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q038",
      "type": "T1_loudness",
      "question": "Recordings A and B use the same source at the same position. Only the playback volume may differ. Which recording is noticeably louder, or are they about the same loudness? Small or barely noticeable differences count as about the same loudness.",
      "options": [
        "Recording A is noticeably louder",
        "Recordings A and B are about the same loudness",
        "Recording B is noticeably louder"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q038_a.wav?v=a0869ff6311f",
        "audio/q038_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000031",
      "scoreRole": "control",
      "scoreRoleLabel": "Control",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    },
    {
      "id": "q039",
      "type": "T1_distance",
      "question": "Recordings A and B use the same source, direction, room, and emitted power. Only the distance may differ. Is the source much closer in Recording A, much closer in Recording B, or at about the same distance in both?",
      "options": [
        "the source is much closer in Recording A",
        "the source is much closer in Recording B",
        "the source is at about the same distance in Recordings A and B"
      ],
      "answerIndex": 2,
      "audio": [
        "audio/q039_a.wav?v=a0869ff6311f",
        "audio/q039_b.wav?v=a0869ff6311f"
      ],
      "timeline": [],
      "reasoningHint": "",
      "promptCondition": "",
      "promptPairId": "",
      "baseItemId": "pair_000032",
      "scoreRole": "distance_baseline",
      "scoreRoleLabel": "Distance baseline",
      "includeInCoreScore": false,
      "answerComponents": {},
      "optionComponents": []
    }
  ]
};
