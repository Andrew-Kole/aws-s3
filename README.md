#Simple rest api for s3 buckets

This api have access to files in amazon s3 bucket.

## What did i do?

1. Created bucket on amazon s3
2. Created user on amazon iam
3. Gave this user permission to access bucket
4. Created access key and secret key for this user
5. Stored to .env file AWS region, access key, secret key, bucket name
6. Created api with express and aws-sdk