# Spatial-Audio-Testing

Interactive AudioWorldSim spatial-audio listening quiz.

Open the [listening test](https://luo-zhengding.github.io/Spatial-Audio-Testing/docs/audition_export/).

The checked-in `docs/audition_export/` pack is a **self-scoring demonstration**
(`blind: false`), with 116 questions: 112 base questions and 4 guided partners.
It includes 14 static laterality, 15 loudness, 15 distance, 16 unguided front/back
inversion, 4 guided front/back inversion, 16 listener-translation, 12 candidate
turn-inference and 24 continuous T3 questions. This pilot matches the fixed
selection quotas; human listening validation is still required, and T3
action/answer balance is not certified.

Only the 16 unguided T2-FB questions enter the current core score. Other tasks
are baselines, controls, candidates or diagnostics. Ordinary rotation T2 is
disabled. The demo locks unguided responses before presenting guided partners;
answers are shipped to the browser, so this pack is not a blind human test.

The companion AudioWorldSim-Code project contains the generator
`custom_simulator/build_web_audition.py` and the workflow in
`custom_simulator/WEB_AUDITION.md`. For formal human screening, build a new site
with `--blind`, retain its private answer key outside the published directory,
and collect each participant's downloaded `responses.jsonl` for offline scoring.
Blind mode excludes guided questions and shows no correctness; it does not
upload responses to a server.

Listen on wired headphones with spatial-audio processing and head tracking
disabled. Publish only the generated site files; do not publish private keys
or source metadata. Rebuild old packs to change sampling or blind mode.
