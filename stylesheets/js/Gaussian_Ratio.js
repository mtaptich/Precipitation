function Gaussian_Ratio(muX, muY, sigX, sigY, z){
/*http://en.wikipedia.org/wiki/Ratio_distribution

 In the absence of correlation (cor(X,Y) = 0), the probability density function of the 
 two normal variable X = N(μX, σX2) and Y = N(μY, σY2) ratio Z = X/Y is given by the 
 following expression:

*/

a = Math.sqrt( Math.pow(z,2)/Math.pow(sigX,2) + 1/Math.pow(sigY,2) );
b = muX*z/Math.pow(sigX,2) + muY/Math.pow(sigY,2)
c = Math.exp(  0.5*Math.pow(b,2)/Math.pow(a,2) -  0.5*( Math.pow(muX,2)/Math.pow(sigX,2) +   Math.pow(muY,2)/Math.pow(sigY,2))  )
phi = 0;

for (var i=0;i<z*10;i++){
	phi = phi + ( 1 / Math.sqrt(2*Math.PI) ) * Math.exp( -0.5 * Math.pow(i/5, 2) ) * i/10 ; 
}

Pz = ( b*c / Math.pow(a,3) ) * ( 2*phi*b / a - 1) / ( Math.sqrt( 2 * Math.PI ) * sigX * sigY) + ( Math.exp( -0.5 * ( Math.pow(muX,2)/Math.pow(sigX,2) +   Math.pow(muY,2)/Math.pow(sigY,2) )  )  /  ( Math.pow(a,2) * Math.PI * sigX, sigY )  )

return Pz

}