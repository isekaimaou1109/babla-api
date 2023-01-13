### **Aim:** ###
- Use to search how to learn fit phrase
- Query to know about a word through phrases

### **Usage:** ###
- ***Usage 1:***
```javascript
const bablaApi = require('babla-api')

/** It will return a result if this word is existed */
verben.phasesOfVerben('gehen')
      .then((data) => console.log(data))
      .catch(e => console.error(e))
```

- **Result:**
```
{
  "indikativ": {
    "präsens": {
      "ich": "werde gegangen sein",     
      "du": "wirst gegangen sein",      
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",    
      "ihr": "werdet gegangen sein",    
      "sie/sie": "werden gegangen sein" 
    },
    "präteritum": {
      "ich": "werde gegangen sein",     
      "du": "wirst gegangen sein",      
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",    
      "ihr": "werdet gegangen sein",    
      "sie/sie": "werden gegangen sein" 
    },
    "perfekt": {
      "ich": "werde gegangen sein",
      "du": "wirst gegangen sein",
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",
      "ihr": "werdet gegangen sein",
      "sie/sie": "werden gegangen sein"
    },
    "plusquamperfekt": {
      "ich": "werde gegangen sein",
      "du": "wirst gegangen sein",
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",
      "ihr": "werdet gegangen sein",
      "sie/sie": "werden gegangen sein"
    },
    "futur i": {
      "ich": "werde gegangen sein",
      "du": "wirst gegangen sein",
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",
      "ihr": "werdet gegangen sein",
      "sie/sie": "werden gegangen sein"
    },
    "futur ii": {
      "ich": "werde gegangen sein",
      "du": "wirst gegangen sein",
      "er/sie/es": "wird gegangen sein",
      "wir": "werden gegangen sein",
      "ihr": "werdet gegangen sein",
      "sie/sie": "werden gegangen sein"
    }
  },
  "konjunktiv": {
    "i präsens": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "i perfekt": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "i futur i": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "i futur ii": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "ii präteritum": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "ii plusquamperfekt": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "ii futur i": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    },
    "ii futur ii": {
      "ich": "würde gegangen sein",
      "du": "würdest gegangen sein",
      "er/sie/es": "würde gegangen sein",
      "wir": "würden gegangen sein",
      "ihr": "würdet gegangen sein",
      "sie/sie": "würden gegangen sein"
    }
  },
  "imperativ": {
    "du": "gehe; geh",
    "ihr": "geht"
  },
  "partizip": {
    "präsens": "gegangen",
    "perfekt": "gegangen"
  }
}
```

- **Usage 2:** When you want to search specified a phrase, just call like below
```javascript
verben.phasesOfVerben('gehen', 'partizip')
      .then((data) => console.log(data))
      .catch(e => console.error(e))
```
- **Result 2:**
```
{
  "partizip": {
    "präsens": "gegangen",
    "perfekt": "gegangen" 
  }
}
```


- **Usage 3:** When you want to search specified a phrase that not existed, just call like below
```javascript
verben.phasesOfVerben('gehen', 'asdasdasdasd')
      .then((data) => console.log(data))
      .catch(e => console.error(e))
```
- **Result 3:** This message error will be show ``'This phrase cannot be found!'``


## **This project is just for study** ##