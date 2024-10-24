# Barfly

## Description

A barflies guide to the best drinking establishments in Canada

## Table Of Contents

- [Installation](#installation)

### Installation

1. Clone this repo locally.
2. Navigate to the project root directory.
3. Install the project dependencies by running `npm install`
4. Create a `.env` file and add the following:

```SESSION_SECRET='SessionSecret'
HONEY_POT_ENCRYPTION_SEED='HoneyPotEncryptionSeed'
CSRF_SECRET='CSRFSecret'
DATABASE_URL="file:./data.db"
RESEND_API_KEY='your-resend-api-key' https://resend.com
```

5. Run the command `npm run dev` to run locally.
