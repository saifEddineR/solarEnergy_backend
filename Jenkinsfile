pipeline{
    environment {
        imagename = "saifromdhane/solarenergy_back"
        registryCredential = "dockerhub_credentials"
        // dockerImage = ''
        scannerHome = tool 'sonarQube scanner'
    }
    agent any
    stages{
        stage("build"){
            
            steps{
                sh 'npm install'
                sh 'docker --version'
            }
        }
        stage("test-sonar"){
            steps{
                script {
                    withSonarQubeEnv("sonarQube") {
                    sh "${scannerHome}/bin/sonar-scanner \
                        -Dsonar.projectKey=solarenergy-backend \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://sonarqube.projectcloud.click/ \
                        -Dsonar.login=admin \
                        -Dsonar.password=admin"
                    } 
           }
                // withSonarQubeEnv("sonarQube") {
                // // This expands the evironment variables SONAR_CONFIG_NAME, SONAR_HOST_URL, SONAR_AUTH_TOKEN that can be used by any script.
                // // sh "${scannerHome}/bin/sonar-scanner"
                //     sh "${tool("sonarqube")}/bin/sonar-scanner \
                //     -Dsonar.projectKey=solarenergy-backend \
                //     -Dsonar.sources=. \
                //     -Dsonar.css.node=. \
                //     -Dsonar.host.url=https://sonarqube.projectcloud.click/ \
                //     -Dsonar.login=admin \
                //     -Dsonar.password=admin"
                // }
                    // withSonarQubeEnv("sonarqube-container") {
                    // sh "${tool("sonarqube")}/bin/sonar-scanner \
                    // -Dsonar.projectKey=test-node-js \
                    // -Dsonar.sources=. \
                    // -Dsonar.css.node=. \
                    // -Dsonar.host.url=http://localhost:9000 \
                    // -Dsonar.login=your-generated-token-from-sonarqube-container"
                    // }
            }
        }
        // stage("docker-build"){
        //     steps{
        //         script {
        //             dockerImage = docker.build imagename   
        //             docker.withRegistry( '', registryCredential ) {
        //             dockerImage.push("$BUILD_NUMBER")
        //             dockerImage.push('latest')
        //             }
        //         }
        //     }
        // }
        // stage("deploy"){
        //     steps{
        //         echo 'deployment'
        //     }
        // }
    }
}