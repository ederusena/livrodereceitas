## Entendendo como o git funciona por baixo dos panos

* SHA secure hash algorithm - pega arquivo e embaralha.

* 40 digitos encriptação.

- BLOBS

- TREES

- COMMITS

 Commit-hash-98ca9 ---------> tree-hash-92ec2---------------->blob-hash-911e7

Tree->92ec2		   blood - 5b1d3 -README      import REACT from ‘react’;

Author- Eder                blood - 911e7-index,js

Committer - Eder

 # Primeiros Passos com git



- git init - cria um repositorio

- git add * .

- git commit -m "Commit de algo"

### Ciclo de vida dos arquivos



Ao usar o comando git add. vc está modificando arquivos que estavam untracked, para Staged "tracked".

![image-20210113231026919](C:\Users\Eder Sena\AppData\Roaming\Typora\typora-user-images\image-20210113231026919.png)

![image-20210113231556028](C:\Users\Eder Sena\AppData\Roaming\Typora\typora-user-images\image-20210113231556028.png)

![image-20210113231630724](C:\Users\Eder Sena\AppData\Roaming\Typora\typora-user-images\image-20210113231630724.png)

# Trabalhando no github

+ git config --list
+  git config --global user.name "eder.sena"
+  git config --global user.nickname "ederusena"
+  git config --global user.email "eder.sena@live.com"

