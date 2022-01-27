pipeline{
    environment {
        imagename = "saifromdhane/nodeserver"
        registryCredential = 'dockerhub_credentials'
        // dockerImage = ''
    }
    agent any
    stages{
        stage("build"){
            
            steps{
                sh 'npm install'
                // sh 'npm run build'
            }
        }
        stage("docker-build"){
            steps{
                script {
                    dockerImage = docker.build imagename   
                    docker.withRegistry( '', registryCredential ) {
                    dockerImage.push("$BUILD_NUMBER")
                    dockerImage.push('latest')
                    }
                }
            }
        }
        stage("deploy"){
            steps{
                echo 'deployment'
            }
        }
    }
}